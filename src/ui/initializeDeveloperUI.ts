import { bindEngineControls }
from './controls/engineControls';

import { createRuntimeToolbar }
from './controls/createRuntimeToolbar';

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

