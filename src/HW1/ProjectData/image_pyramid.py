import sys
import cv2
import numpy as np

def get_translation_matrix(dx, dy):
    return np.float32([[1, 0, dx],
                [0, 1, dy]])

def gaussian_kernel(kernel_size = 5, sigma=1):
    coords = np.linspace(-(kernel_size//2), kernel_size//2, kernel_size)
    x, y = np.meshgrid(coords, coords)

    kernel_formula = np.exp(-(x**2 + y**2) / (2 * sigma**2))

    return kernel_formula / np.sum(kernel_formula)


def gaussian_blur(img):
    kernel = gaussian_kernel(5, sigma=1)
    blurred = cv2.filter2D(img, -1, kernel)

    return blurred

def scale_down(img, factor=2):
    blurred_img = gaussian_blur(img)
    scaled_img = cv2.resize(blurred_img, (blurred_img.shape[1]//factor, blurred_img.shape[0]//factor), interpolation=cv2.INTER_AREA)

    return scaled_img

def ncc_score(base, shift, border_ratio=0.1):
    """
    Normalized Cross-Correlation between two same-size images.
    """
    h, w = base.shape
    bh, bw = int(h*border_ratio), int(w*border_ratio)
    
    base_crop = base[bh:h-bh, bw:w-bw]
    shift_crop = shift[bh:h-bh, bw:w-bw]
    
    base_mean = base_crop - np.mean(base_crop)
    shift_mean = shift_crop - np.mean(shift_crop)
    return np.sum(base_mean * shift_mean) / np.sqrt(np.sum(base_mean**2) * np.sum(shift_mean**2))

def pyramid_processing(base, shift):
    best_score = -np.inf
    best_dx, best_dy = 0, 0
    max_shift = (600*15)//max(base.shape)

    if max(base.shape) > 600: 
        print(f"curr shape: {base.shape}")
        dx0, dy0 = pyramid_processing(scale_down(base), scale_down(shift))
        print(f"done w/ shape: {base.shape}")
        dx0 *= 2
        dy0 *= 2
    else: 
        dx0, dy0 = 0, 0

    for dx in range(dx0 - max_shift, dx0 + max_shift + 1):
        for dy in range(dy0 - max_shift, dy0 + max_shift + 1):
            shifted = cv2.warpAffine(shift, get_translation_matrix(dx, dy), (shift.shape[1], shift.shape[0]))
            score = ncc_score(base, shifted)
            if score > best_score:
                best_score = score
                best_dx, best_dy = dx, dy

    return best_dx, best_dy

if __name__ == "__main__":

    max_shift = 15

    img = cv2.imread(r"CS180\src\HW1\cs180 proj1 data\original_images\italil.tif", cv2.IMREAD_GRAYSCALE)
    #img = cv2.imread(r"CS180\src\HW1\cs180 proj1 data\monastery.jpg", cv2.IMREAD_GRAYSCALE)

    h = img.shape[0]  
    w = img.shape[1] 
    third = h//3   

    B = img[0:third, :]
    G = img[third:2*third, :]
    R = img[2*third:3*third, :]

    B = B.astype(np.float32)
    G = G.astype(np.float32)
    R = R.astype(np.float32)



    G_shifts = pyramid_processing(B, G)

    R_shifts = pyramid_processing(B, R)

    G_shift = cv2.warpAffine(G, get_translation_matrix(G_shifts[0], G_shifts[1]), (G.shape[1], G.shape[0]))
    R_shift =cv2.warpAffine(R, get_translation_matrix(R_shifts[0], R_shifts[1]), (R.shape[1], R.shape[0]))

    non_naive = np.dstack([B, G_shift, R_shift]).astype(np.uint8)

    target_width = 1800
    aspect_ratio = non_naive.shape[1] / non_naive.shape[0]
    target_height = int(target_width / aspect_ratio)


    resized = cv2.resize(non_naive, (target_width, target_height))
    cv2.namedWindow("non-naive", cv2.WINDOW_NORMAL)
    cv2.imshow("non-naive", non_naive)

    cv2.waitKey(0)
    cv2.destroyAllWindows()
















