import { getComponent } from '../core/getComponent';

export function getTransform(entity) {

  return getComponent(
    entity,
    'transform'
  );
}