from PIL import Image
import numpy as np

def adjust_water_color(input_path, output_path):
    img = Image.open(input_path).convert('RGBA')
    data = np.array(img)

    # Define the target vintage teal color (normalized)
    # A softer, greener blue: R=50, G=160, B=170
    target_r, target_g, target_b = 50, 160, 170

    # Create a mask for blue-ish pixels (the water)
    # We look for pixels where Blue is dominant and Red is relatively low
    r, g, b, a = data.T
    
    # Simple heuristic for "blue water" pixels in this specific image
    # Blue channel is significantly higher than Red, and reasonably high overall
    water_mask = (b > r * 1.2) & (b > 100) & (g > r)

    # Apply the color shift only to the masked area
    # We'll blend the original color with the target vintage teal
    # This preserves the ripples and shadows (luminance) while shifting the hue
    
    # Convert to float for blending
    data_float = data.astype(float)
    
    # Blend factor (how much of the new color to apply)
    alpha = 0.6 
    
    # Apply shift
    data_float[..., 0][water_mask.T] = data_float[..., 0][water_mask.T] * (1 - alpha) + target_r * alpha
    data_float[..., 1][water_mask.T] = data_float[..., 1][water_mask.T] * (1 - alpha) + target_g * alpha
    data_float[..., 2][water_mask.T] = data_float[..., 2][water_mask.T] * (1 - alpha) + target_b * alpha
    
    # Clip and convert back to uint8
    data_adjusted = np.clip(data_float, 0, 255).astype(np.uint8)
    
    # Save the result
    result_img = Image.fromarray(data_adjusted)
    result_img.save(output_path)
    print(f"Saved vintage pool image to {output_path}")

if __name__ == "__main__":
    input_file = "/home/ubuntu/rose-island-book/client/public/images/rose-island-pool-1924-color.png"
    output_file = "/home/ubuntu/rose-island-book/client/public/images/rose-island-pool-1924-vintage.png"
    adjust_water_color(input_file, output_file)
