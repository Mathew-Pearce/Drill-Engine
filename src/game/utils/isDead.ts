/**
 * Checks if an entity has died.
 *
 * @param entity Entity to check.
 * @returns True if health is 0 or below.
 */
export function isDead(
    entity
  ) {
  
    return (
      entity.health !== undefined &&
      entity.health <= 0
    );
  }