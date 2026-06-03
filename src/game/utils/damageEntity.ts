/**
 * Reduces an entity's health.
 *
 * @param entity Target entity.
 * @param amount Damage amount.
 */
export function damageEntity(
    entity,
    amount
  ) {
  
    if (entity.health === undefined)
      return;
  
    entity.health -= amount;

  }