import { getComponent } from '../core/getComponent'

export function getRenderableSize(entity) {

  const renderable =
    getComponent(
      entity,
      'renderable'
    );

  if (!renderable)
    return null;

  if (
    renderable.width !== undefined &&
    renderable.height !== undefined
  ) {
    return {
      width: renderable.width,
      height: renderable.height,
    };
  }

  if (renderable.size !== undefined) {
    return {
      width: renderable.size,
      height: renderable.size,
    };
  }

  return null;
}