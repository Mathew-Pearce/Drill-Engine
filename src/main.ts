import { createRuntime }
from './engine/core/runtime';

import { initialState }
from './game/state';

import { distanceSystem }
from './game/systems/distanceSystem';
import { start } from './engine/controls/start'
import { pause } from './engine/controls/pause';
import { resume } from './engine/controls/resume';
import { stop } from './engine/controls/stop'

const runtime =
  createRuntime({

    state: initialState,

    systems: [
      distanceSystem,
    ],
  });

window.addEventListener("keydown", (e) => {
  if (e.code === "KeyR"){
    start(runtime);
  }
  if (e.code === "Space") {
    pause(runtime);
  }
  if (e.code === "Enter") {
    resume(runtime);
  }
  if (e.code === "KeyX"){
    stop(runtime)
  }
});

runtime.subscribe(state => {

  console.log(
    `Distance: ${state.distance}`
  );
});

