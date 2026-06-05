import { bindEngineControls }
from './controls/engineControls';

import { createRuntimeToolbar }
from './controls/createRuntimeToolbar';
import { createViewport } from './views/createViewport'

export function initializeDeveloperUI(
  runtime,
) {
  const viewport =
    createViewport();

  bindEngineControls(
    runtime
  );

  createRuntimeToolbar(
    runtime
  );

  return{
    viewport
  }
  
}

