import { getPosition } from '../components/transform/getPosition';
import { getComponent } from '../components/core/getComponent';

export function createRenderer(canvas: HTMLCanvasElement) {

  const ctx = canvas.getContext('2d')!;

  function render(state) {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    state.entities.forEach(entity => {

      const position =
        getPosition(entity);

      if (!position)
        return;

      const renderable =
        getComponent(entity, 'renderable');

      let color =
        renderable?.color ?? 'white';

      let size =
        renderable?.size ?? entity.size ?? 5;

      ctx.fillStyle =
        color;

      ctx.fillRect(
        position.x,
        position.y,
        size,
        size
      );
    });
  }

  return { render };
}