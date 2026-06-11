import { createPlayer } from '../entities/factories/createPlayer'
import { createEmitter } from '../entities/factories/createEmitter'
import { createWall } from '../entities/factories/createWall';
import { createRenderableComponent } from '../components/renderable/createRenderableComponent'
import { createColliderComponent} from '../components/collider/createColliderComponent'
import { createTransformComponent } from '../components/transform/createTransformComponent'

export const initialState = {
    game: {
      isGameOver: false,
  },
    events: [],
    
    entities: [
      createPlayer(),
      createEmitter({
        id: 'emitter_0'
      }),

      createEmitter({
        id: 'emitter_1',

        x: 400,
        y: 100,

        pattern: 'directional',
      }),

      createEmitter({
        id: 'emmiter_2',

        x: 700,
        y: 300,

        pattern: 'aimed',
      }), 
      
      createWall()
    ],
  };