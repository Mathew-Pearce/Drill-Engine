import { getComponent }  from '../components/core/getComponent'
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
  
    const health = 
      getComponent(
        entity, 
        'health'
      )

      if (!health) 
        return;
  
    health.currentHealth -= amount;

  }