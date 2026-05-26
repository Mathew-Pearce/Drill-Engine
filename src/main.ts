import { createRuntime }
from './engine/runtime';

import { initialState }
from './game/state';

import { distanceSystem }
from './game/systems/distanceSystem';

const runtime =
  createRuntime({

    state: initialState,

    systems: [
      distanceSystem,
    ],
  });



window.addEventListener("keydown", (e) => {

  if (e.code === "Space") {
    runtime.pause();
  }

  if (e.code === "Enter") {
    runtime.resume();
  }
});

runtime.subscribe(state => {

  console.log(
    `Distance: ${state.distance}`
  );
});

runtime.start();