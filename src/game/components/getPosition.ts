import { getComponent } from './getComponent';

export function getPosition(entity) {

  const transform =
    getComponent(
      entity,
      'transform'
    );

  if (transform)
    return transform.position;

  return entity.position;
}