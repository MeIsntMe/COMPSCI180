import cv2
import numpy as np
import sys

#removes border, accepts noise
def remove_border(img, minimum=253, kernel_size=5):
    mask = img < minimum
    formatted_mask = mask.astype(np.float32) * 255 #opencv needs unit8 TT
    kernel = np.ones((kernel_size, kernel_size), np.float32)
    mask_clean = cv2.erode(formatted_mask, kernel, iterations=1)
    
    coords = np.array(np.nonzero(mask_clean))
    print(coords.min(axis=1))
    print(coords[:6])
    y0, x0 = coords.min(axis=1)
    y1, x1 = coords.max(axis=1) + 1
    img[:y0, :] = 0
    img[y1:, :] = 0
    img[:, :x0] = 0
    img[:, x1:] = 0
    
    return img

def remove_border(img, minimum=5, maximum=250, kernel_size=5):
    # Create mask of pixels to remove (outside thresholds)
    mask = (img < minimum) | (img > maximum)
    mask = mask.astype(np.uint8) * 255  # OpenCV needs uint8

    # Clean the mask with erosion
    kernel = np.ones((kernel_size, kernel_size), np.uint8)
    mask_clean = cv2.erode(mask, kernel, iterations=1)

    # Remove the border pixels (set them to 0)
    img[mask_clean > 0] = 0

    return img


img = cv2.imread('CS180\src\HW1\cs180 proj1 data\original_images\monastery.jpg', cv2.IMREAD_GRAYSCALE)

if img is None:
    sys.exit("Could not read the image.")

img = remove_border(img)

cv2.imshow("Display window", img)
key = cv2.waitKey(0)

