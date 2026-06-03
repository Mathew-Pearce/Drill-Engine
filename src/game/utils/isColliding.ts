/**
 * Performs a simple axis-aligned bounding box collision test
 * using entity positions and sizes.
 *
 * Useful for:
 * - projectile impacts
 * - player interactions
 * - trigger zones
 *
 * @param a First entity.
 * @param b Second entity.
 * @returns True if the entities overlap, otherwise false.
 */
export function isColliding(a, b) {

    return (

      a.position.x <
      b.position.x + b.size &&
  
    a.position.x + a.size >
      b.position.x &&
  
    a.position.y <
      b.position.y + b.size &&
  
      a.position.y + a.size >
      b.position.y
    )
  }