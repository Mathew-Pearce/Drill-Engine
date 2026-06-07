import { createHealthComponent } from '../components/createHealthComponent'

export const initialState = {
    game: {
      isGameOver: false,
  },
    entities: [
      {
        id: 'player',
        type: 'player',

        size: 20,
  
        position: {
          x: 100,
          y: 100,
        },
  
        velocity: {
          x: 1,
          y: 0,
        },

        maxHealth: 3,

        components: {
          health: createHealthComponent({
            currentHealth: 3,
            visible: true,
          }),
        },

        markedForRemoval: false,
      },
      {
        id: 'emitter_1',
        type: 'emitter',

        size: 20,

        position: {
          x: 400,
          y: 300,
        },
        fireRate: 20, //ticks between shots
        timer: 0, 

        pattern: 'radial',
        bulletCount: 12,

        direction: {
          x: 1,
          y: 0,

          health: 1,

          maxHealth: 1,

          markedForRemoval: false,
        }
      },
      {
        id: 'emitter_2',
        type: 'emitter',

        size: 20,

        position: {
          x: 400, 
          y: 100
        }, 
        
        fireRate: 10,

        timer: 0,
        pattern: 'directional',

        direction: {
          x: 0,
          y: 1,

          health: 1,

          maxHealth: 1,

          markedForRemoval: false,
        },
      },
      {
        id: 'aimed_emmiter',

        type: 'emitter',

        target: 'player',

        size: 20,

        position: {
          x: 700,
          y: 300,
        },

        fireRate: 20,

        timer: 0,

        pattern: 'aimed',

        health: 1,

        maxHealth: 1,

        markedForRemoval: false,
      }
    ],
  };