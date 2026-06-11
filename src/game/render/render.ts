import { getPosition } from '../components/transform/getPosition';
import { getComponent } from '../components/core/getComponent';
import { getRenderableSize } from '../components/renderable/getRenderableSize';

export function createRenderer(canvas: HTMLCanvasElement) {

  const ctx = canvas.getContext('2d')!;

  function render(state) {

    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    state.entities.forEach(entity => {

      const position =
        getPosition(entity);

      if (!position)
        return;

      const renderable =
        getComponent(
          entity,
          'renderable'
        );

      if (!renderable)
        return;

      const size =
        getRenderableSize(entity);

      if (!size)
        return;

      ctx.fillStyle =
        renderable.color;

      ctx.fillRect(
        position.x,
        position.y,
        size.width,
        size.height
      );
    });
  }

  return { render };
}