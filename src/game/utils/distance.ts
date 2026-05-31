/**
 * Calculates the straight-line distance between two points.
 *
 * Useful for:
 * - range checks
 * - AI behaviour
 * - collision proximity tests
 * - target selection
 *
 * @param a Source position containing x and y coordinates.
 * @param b Target position containing x and y coordinates.
 * @returns Distance between the two points.
 */
export function distance(a, b) {

    const dx = b.x - a.x;
    const dy = b.y - a.y;
  
    return Math.sqrt(
      dx * dx +
      dy * dy
    );
  }