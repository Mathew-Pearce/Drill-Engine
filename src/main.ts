import { createRuntime }
from './engine/core/runtime';

import { initialState }
from './game/state/initialState';

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

import { damageSystem } from './game/systems/damageSystem'

import { wallBlockSystem } from './game/systems/wallBlockSystem'

import { contactRemovalSystem } from './game/systems/contactRemovalSystem'

import { lifetimeSystem } 
from './game/systems/lifetimeSystem'

import { emitterSystem } 
from './game/systems/emitterSystem'

import { deathSystem} from './game/systems/deathSystem'

import { gameOverSystem } from './game/systems/gameOverSystem'

import { cleanUpSystem } from './game/systems/cleanUpSystem'

import { getEntitiesByType } from './game/utils/getEntitiesByType'


const runtime =
  createRuntime({

    state: initialState,

    systems: [
      emitterSystem,
      playerMovementSystem,
      movementSystem,
      lifetimeSystem,
      collisionSystem,
      wallBlockSystem,
      damageSystem,
      contactRemovalSystem,
      deathSystem, 
      cleanUpSystem,
      gameOverSystem
    ],
      config: runtimeConfig,
  });

 const ui = initializeDeveloperUI(runtime);
 initializeGameUI(
  runtime,
  ui.viewport
  );

 bindKeys();

  const renderer =
    createRenderer(ui.viewport.canvas)

runtime.subscribe(state => {

  renderer.render(state);
  // Get some feedback about bullets in the scene. Saved for later.
  // const bullets = 
  //   getEntitiesByType(state.entities,'bullet');

  // console.log(
  //   `Bullets: ${bullets.length}`

  // );
});



