import { createEntityId } from '../../utils/createEntityId';
import { createTransformComponent } from '../../components/transform/createTransformComponent';
import { createRenderableComponent } from '../../components/renderable/createRenderableComponent';
import { createColliderComponent } from '../../components/collider/createColliderComponent';
import { createEmitterComponent } from '../../components/emitter/createEmitterComponent';

export function createEmitter({
  id = createEntityId('emitter'),
  x = 400,
  y = 300,
  pattern = 'radial',
  fireRate = 20,
  bulletCount = 12,
  direction = { x: 1, y: 0 },
} = {}) {

  return {
    id,
    type: 'emitter',

    position: {
      x,
      y,
    },

    direction,

    components: {
      renderable: createRenderableComponent({
        color: 'magenta',
        size: 20,
        visible: true,
      }),

      collider: createColliderComponent({
        layer: 'default',
        width: 20,
        height: 20,
        visible: true,
      }),

      emitter: createEmitterComponent({
        pattern,
        fireRate,
        bulletCount,
        visible: true,
      }),
    },

    markedForRemoval: false,
  };
}