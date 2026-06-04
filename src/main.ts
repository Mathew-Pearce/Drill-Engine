import { createRuntime }
from './engine/core/runtime';

import { initialState }
from './game/state/initialState';

import { createViewport } from './ui/views/createViewport'

import { initializeDeveloperUI } from './ui/initializeDeveloperUI';

import { initializeGameUI}  from  './game/views/initializeGameUI'

import { createRenderer } from './game/render/render';

import { runtimeConfig }
from './engine/config/runtimeConfig'

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

import { deathSystem} from './game/systems/deathSystem'

import { gameOverSystem } from './game/systems/gameOverSystem'

import { cleanUpSystem } from './game/systems/cleanUpSystem'


const runtime =
  createRuntime({

    state: initialState,

    systems: [
      emitterSystem,
      playerMovementSystem,
      collisionSystem,
      movementSystem,
      lifetimeSystem,
      deathSystem, 
      cleanUpSystem,
      gameOverSystem
    ],
      config: runtimeConfig,
  });

  const viewport =
  createViewport();

 initializeDeveloperUI(runtime);
 initializeGameUI(
  runtime,
  viewport
  );

 bindKeys();


  const renderer =
    createRenderer(viewport.canvas)

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



