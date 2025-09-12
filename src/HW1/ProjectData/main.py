import cv2
import numpy as np
import os
from single_scale import ncc_score, single_scale_shift
from image_pyramid import pyramid_processing, get_translation_matrix

current_file = os.path.abspath(__file__)
current_dir = os.path.dirname(current_file)

def crop(img, border_ratio=0.05):
    h, w, c = img.shape
    bh, bw = int(h*border_ratio), int(w*border_ratio)
    
    return img[bh:h-bh, bw:w-bw]

for filename in os.listdir(f"{current_dir}\\original_images"): 
    img = cv2.imread(f"{current_dir}\\original_images\\{filename}", cv2.IMREAD_GRAYSCALE)
    img_name, img_format = filename.split('.')

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

    if img_format == "jpg":
        G_to_shift = single_scale_shift(B, G)
        R_to_shift = single_scale_shift(B, R)
    else: 
        G_to_shift = pyramid_processing(B, G)
        R_to_shift = pyramid_processing(B, R)

    G_shift = cv2.warpAffine(G, get_translation_matrix(G_to_shift[0], G_to_shift[1]), (G.shape[1], G.shape[0]))
    R_shift =cv2.warpAffine(R, get_translation_matrix(R_to_shift[0], R_to_shift[1]), (R.shape[1], R.shape[0]))

    coloured_image = np.dstack([B, G_shift, R_shift]).astype(np.uint8)
    processed_image = crop(coloured_image)

    target_width = 1600
    aspect_ratio = processed_image.shape[1] / processed_image.shape[0]
    target_height = int(target_width / aspect_ratio)

    resized_image = cv2.resize(processed_image, (target_width, target_height))
    cv2.namedWindow("processed_image", cv2.WINDOW_NORMAL)
    # cv2.imshow("coloured_image", resized_image)

    # cv2.waitKey(0)
    cv2.imwrite(os.path.join(current_dir, "coloured_images", f"{img_name}_resized.jpg"), resized_image)
    cv2.imwrite(os.path.join(current_dir, "coloured_images", f"{img_name}_original.{img_format}"), processed_image)
    cv2.destroyAllWindows()

    







    


























