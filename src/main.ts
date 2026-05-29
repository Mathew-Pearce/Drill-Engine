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

const runtime =
  createRuntime({

    state: initialState,

    systems: [
      movementSystem
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

