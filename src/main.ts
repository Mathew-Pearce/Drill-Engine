import { createRuntime }
from './engine/core/runtime';

import { initialState }
from './game/state';

import { distanceSystem }
from './game/systems/distanceSystem';

import { accelerationSystem }
from './game/systems/accelerationSystem'

import { runtimeConfig }
from './engine/config/runtimeConfig'

import { bindEngineControls } from './game/input/engineControls'

const runtime =
  createRuntime({

    state: initialState,

    systems: [
      accelerationSystem,
      distanceSystem,
    ],
      config: runtimeConfig,
  });

 bindEngineControls(runtime);

runtime.subscribe(state => {

  console.log(
    `D:${state.distance}
  V:${state.velocity}
  A:${state.acceleration}`
  );
});

