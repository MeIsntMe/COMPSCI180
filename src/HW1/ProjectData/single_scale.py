import cv2
import numpy as np
from image_pyramid import get_translation_matrix

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

def single_scale_shift(base, shift):
    best_score = -np.inf
    best_dx, best_dy = 0, 0
    max_shift = 15

    for dx in range(-max_shift, max_shift+1):
        for dy in range(-max_shift, max_shift+1):
            shifted = np.roll(shift, shift=(dy, dx), axis=(0, 1))
            score = ncc_score(base, shifted)
            if score > best_score:
                best_score = score
                best_dx, best_dy = dx, dy

    return best_dx, best_dy

if __name__ == "__main__":

    img = cv2.imread(r"CS180\src\HW1\cs180 proj1 data\original_images\monastery.jpg", cv2.IMREAD_GRAYSCALE)

    # img = remove_border(img)

    h = img.shape[0]  # total height
    w = img.shape[1]  # total width
    third = h//3   # height of each channel

    # Extract each channel
    B = img[0:third, :]
    G = img[third:2*third, :]
    R = img[2*third:3*third, :]

    B = B.astype(np.float32)
    G = G.astype(np.float32)
    R = R.astype(np.float32)


    G_shifts = single_scale_shift(B, G)
    R_shifts = single_scale_shift(B, R)

    G_shift = cv2.warpAffine(G, get_translation_matrix(G_shifts[0], G_shifts[1]), (G.shape[1], G.shape[0]))
    R_shift =cv2.warpAffine(R, get_translation_matrix(R_shifts[0], R_shifts[1]), (R.shape[1], R.shape[0]))

    # cv2.imshow("Naive Result", np.dstack([B,B,B]).astype(np.uint8))
    # cv2.waitKey(0)
    # cv2.imshow("Naive Result", np.dstack([G,G,G]).astype(np.uint8))
    # cv2.waitKey(0)
    # cv2.imshow("Naive Result", np.dstack([R,R,R]).astype(np.uint8))
    # cv2.waitKey(0)

    # Stack channels into a naive RGB image (no alignment yet)
    naive_color = np.dstack([R, G, B]).astype(np.uint8)
    non_naive = np.dstack([B, G_shift, R_shift]).astype(np.uint8)

    # Show image (works if you're using a notebook or local Python)
    # cv2.imshow("Naive Result", naive_color)
    print("donez, awaiting, no-lag")
    cv2.imshow("non-naive", non_naive)
    cv2.waitKey(0)
    cv2.destroyAllWindows()