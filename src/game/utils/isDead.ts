import { getComponent } from '../components/core/getComponent';

export function isDead(entity) {

  const health =
    getComponent(
      entity,
      'health'
    );

  if (!health)
    return false;

  return health.currentHealth <= 0;
}