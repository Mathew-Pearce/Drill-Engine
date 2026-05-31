/**
 * Calculates the centre point of an entity based on its
 * position and size.
 *
 * Useful for:
 * - projectile spawning
 * - aiming calculations
 * - distance measurements
 * - future rotation systems
 *
 * @param entity Entity containing position and size properties.
 * @returns The centre position of the entity.
 */
export function getEntityCenter(entity) {

    return {
  
      x:
        entity.position.x +
        entity.size / 2,
  
      y:
        entity.position.y +
        entity.size / 2,
    };
  }