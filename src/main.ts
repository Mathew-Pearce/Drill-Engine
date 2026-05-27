import { createRuntime }
from './engine/core/runtime';

import { initialState }
from './game/state';

import { distanceSystem }
from './game/systems/distanceSystem';

import { pause } from './engine/controls/pause';
import { resume } from './engine/controls/resume';

const runtime =
  createRuntime({

    state: initialState,

    systems: [
      distanceSystem,
    ],
  });



window.addEventListener("keydown", (e) => {
//Pause runtime
  if (e.code === "Space") {
    pause(runtime);
  }
//Resume runtime
  if (e.code === "Enter") {
    resume(runtime);
  }
});

runtime.subscribe(state => {

  console.log(
    `Distance: ${state.distance}`
  );
});

runtime.start();