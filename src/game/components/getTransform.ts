import { getComponent } from './getComponent';

export function getTransform(entity) {

  return getComponent(
    entity,
    'transform'
  );
}