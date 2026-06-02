import { bindEngineControls }
from './controls/engineControls';

import { createRuntimeToolbar }
from './controls/runtimeToolbar/createRuntimeToolbar';

export function initializeDeveloperUI(
  runtime
) {

  bindEngineControls(
    runtime
  );

  createRuntimeToolbar(
    runtime
  );
}

