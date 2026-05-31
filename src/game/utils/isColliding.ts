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
      Math.abs(a.position.x - b.position.x) <
        (a.size + b.size) / 2
    &&
      Math.abs(a.position.y - b.position.y) <
        (a.size + b.size) / 2
    );
  }