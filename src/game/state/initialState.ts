import { createHealthComponent } from '../components/health/createHealthComponent'
import { createTransformComponent } from '../components/transform/createTransformComponent'
import { createEmitterComponent } from '../components/emitter/createEmitterComponent'
import { createRenderableComponent } from '../components/renderable/createRenderableComponent'
import { createColliderComponent} from '../components/collider/createColliderComponent'

export const initialState = {
    game: {
      isGameOver: false,
  },
    events: [],
    
    entities: [
      {
        id: 'player',
        type: 'player',
  
        velocity: {
          x: 1,
          y: 0,
        },

        maxHealth: 3,

        components: {
          transform: createTransformComponent({
            x: 100,
            y: 100, 
            visible: true
          }),

          health: createHealthComponent({
            currentHealth: 3,
            visible: true,
          }),

          renderable: createRenderableComponent({
            color: 'cyan',
            shape: 'square',
            size: 20,
            visible: true
          }),

          collider: createColliderComponent({
            layer: 'player',
            width: 20,
            height: 20,
            visible: true
          })
        },

        markedForRemoval: false,
      },
      {
        id: 'emitter_1',
        type: 'emitter',

        position: {
          x: 400,
          y: 300,
        },
        
        direction: {
          x: 1,
          y: 0,
       },

        health: 1,

        maxHealth: 1,

        components: {
          emitter: createEmitterComponent({
            pattern: 'radial',
            fireRate: 20,
            bulletCount: 12,
            visible: true,
          }),
          
          renderable: createRenderableComponent({
            color: 'magenta',
            shape: 'square',
            size: 20,
            visible: true
          }),
        },
          markedForRemoval: false,
        },
      {
        id: 'emitter_2',
        type: 'emitter',

        position: {
          x: 400, 
          y: 100
        }, 
        
        direction: {
          x: 0,
          y: 1,
        },

          health: 1,

          maxHealth: 1,

          components: {
            emitter: createEmitterComponent({
              pattern: 'directional',
              fireRate: 10,
              bulletCount: 12,
              visible: true,
            }),
            renderable: createRenderableComponent({
              color: 'magenta',
              shape: 'square',
              size: 20,
              visible: true
            }),
          },

          markedForRemoval: false,
        },
      {
        id: 'aimed_emmiter',

        type: 'emitter',

        target: 'player',

        position: {
          x: 700,
          y: 300,
        },
        

        health: 1,

        maxHealth: 1,

        components: {
          emitter: createEmitterComponent({
            pattern: 'aimed',
            fireRate: 20,
            bulletCount: 12,
            visible: true,
          }),

          renderable: createRenderableComponent({
            color: 'magenta',
            shape: 'square',
            size: 20,
            visible: true
          }),
        },

        markedForRemoval: false,
      }
    ],
  };