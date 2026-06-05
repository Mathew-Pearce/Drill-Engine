import { createViewportWindow } from './views/createViewportWindow'
import { bindEngineControls } from './controls/engineControls'

export function initializeDeveloperUI(
  runtime,
) {
  const root =
    document.getElementById(
      'drill-root'
    );

    const viewportWindow =
      createViewportWindow(runtime);

    root.appendChild(
      viewportWindow.frame
    );


  bindEngineControls(
    runtime
  );

  return{
    viewport:
      viewportWindow.viewport
  };
  
}

