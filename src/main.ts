import { createRuntime }
from './engine/core/runtime';

import { initialState }
from './game/state/initialState';

import { createRenderer } from './game/render/render';

import { runtimeConfig }
from './engine/config/runtimeConfig'

import { bindEngineControls } from './game/input/engineControls'

import { movementSystem } 
from './game/systems/movementSystem'

import { bulletSystem }
from './game/systems/bulletSystem'

import { lifetimeSystem } 
from './game/systems/lifetimeSystem'

import { emitterSystem } 
from './game/systems/emitterSystem'


const runtime =
  createRuntime({

    state: initialState,

    systems: [
      emitterSystem,
      bulletSystem,
      movementSystem,
      lifetimeSystem
    ],
      config: runtimeConfig,
  });

 bindEngineControls(runtime);

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
});

runtime.setStatus('running');
runtime.start();

