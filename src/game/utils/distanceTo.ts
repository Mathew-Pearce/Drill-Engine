import { normalize }
from './normalize';
/**
 * Calculates a normalized direction vector from one position to another.
 *
 * Useful for:
 * - enemy targeting
 * - projectile aiming
 * - navigation systems
 *
 * @param source Starting position.
 * @param target Destination position.
 * @returns A normalized direction vector pointing toward the target.
 */
export function directionTo(
  source,
  target
) {

  return normalize(
    target.x - source.x,
    target.y - source.y
  );
}