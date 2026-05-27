import { createRuntime }
from './engine/core/runtime';

import { initialState }
from './game/state';

import { distanceSystem }
from './game/systems/distanceSystem';

import { bindEngineControls } from './game/input/engineControls'

const runtime =
  createRuntime({

    state: initialState,

    systems: [
      distanceSystem,
    ],
  });

 bindEngineControls(runtime);

runtime.subscribe(state => {

  console.log(
    `Distance: ${state.distance}`
  );
});

