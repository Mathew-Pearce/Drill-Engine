export const initialState = {

    entities: [
      {
        id: 'player',
        type: 'player',
  
        position: {
          x: 100,
          y: 100,
        },
  
        velocity: {
          x: 1,
          y: 0,
        },
      },
      {
        id: 'emitter_1',
        type: 'emitter',

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
        }
      },
      {
        id: 'emitter_2',
        type: 'emitter',

        position: {
          x: 400, 
          y: 100
        }, 
        
        fireRate: 10,

        timer: 0,

        direction: {
          x: 0,
          y: 1,
        },
      },
      {
        id: 'aimed_emmiter',

        type: 'emitter',

        position: {
          x: 700,
          y: 300,
        },

        fireRate: 20,

        timer: 0,

        pattern: 'aimed',
      }
    ],
  };