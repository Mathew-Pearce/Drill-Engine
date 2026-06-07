import { getComponent } from '../components/getComponent';

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