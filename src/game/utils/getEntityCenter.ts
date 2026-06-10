import { getPosition } from '../components/transform/getPosition';
import { getRenderableSize } from '../components/renderable/getRenderableSize';

export function getEntityCenter(entity) {

  const position =
    getPosition(entity);

  const size =
    getRenderableSize(entity);

  if (
    !position ||
    !size
  ) {
    return null;
  }

  return {
    x:
      position.x +
      size.width / 2,

    y:
      position.y +
      size.height / 2,
  };
}