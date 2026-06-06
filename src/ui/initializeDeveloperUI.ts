import { createDrillAppWindow } from './views/createDrillAppWindow';
import { bindEngineControls } from './controls/engineControls';

export function initializeDeveloperUI(runtime) {

  const root =
    document.getElementById('drill-root');

  const appWindow =
    createDrillAppWindow(runtime);

  root.appendChild(
    appWindow.root
  );

  bindEngineControls(runtime);

  return {
    viewport:
      appWindow.viewport,
  };
}
