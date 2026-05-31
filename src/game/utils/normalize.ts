/**
 * Converts a vector into a unit vector while preserving direction.
 *
 * Example:
 * (3, 4) -> (0.6, 0.8)
 *
 * Useful for:
 * - movement direction
 * - projectile aiming
 * - steering behaviours
 *
 * @param x Horizontal vector component.
 * @param y Vertical vector component.
 * @returns A normalized vector with a magnitude of 1.
 */
export function normalize(x, y) {

    const length =
      Math.sqrt(
        x * x +
        y * y
      );
  
    if (length === 0)
      return { x: 0, y: 0 };
  
    return {
      x: x / length,
      y: y / length,
    };
  }