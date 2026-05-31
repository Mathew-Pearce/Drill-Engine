import { createRuntime }
from './engine/core/runtime';

import { initialState }
from './game/state/initialState';

import { createRenderer } from './game/render/render';

import { runtimeConfig }
from './engine/config/runtimeConfig'

import { bindEngineControls } from './game/input/engineControls'

import { bindKeys } from './game/input/keys';



import { movementSystem } 
from './game/systems/movementSystem'

import { playerMovementSystem } 
from './game/systems/playerMovementSystem'

import { collisionSystem } from './game/systems/collisionSystem'

import { lifetimeSystem } 
from './game/systems/lifetimeSystem'

import { emitterSystem } 
from './game/systems/emitterSystem'


const runtime =
  createRuntime({

    state: initialState,

    systems: [
      emitterSystem,
      playerMovementSystem,
      collisionSystem,
      movementSystem,
      lifetimeSystem
    ],
      config: runtimeConfig,
  });

 bindEngineControls(runtime);
 bindKeys();

 const canvas = 
  document.getElementById('game') as HTMLCanvasElement;

  console.log(canvas);

  canvas.width = 800;
  canvas.height = 600;

  canvas.style.background = 'black';

  const renderer =
    createRenderer(canvas)

runtime.subscribe(state => {

  renderer.render(state);
  // Get some feedback about bullets in the scene. 
  const bullets =
    state.entities.filter(
      e => e.type === 'bullet'
    ).length;

  console.log(
    `Bullets: ${bullets}`
  );
});

runtime.setStatus('running');
runtime.start();

