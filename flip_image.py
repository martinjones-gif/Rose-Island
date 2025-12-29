from PIL import Image
import os

image_path = '/home/ubuntu/rose-island-book/client/public/images/RoseIslandDockandGuests.webp'

try:
    img = Image.open(image_path)
    # Flip the image left to right
    flipped_img = img.transpose(Image.FLIP_LEFT_RIGHT)
    flipped_img.save(image_path)
    print(f"Successfully flipped {image_path}")
except Exception as e:
    print(f"Error flipping image: {e}")
