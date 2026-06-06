import { createEditorState } from './editor/createEditorState'
import { createDrillAppWindow } from './views/createDrillAppWindow';
import { bindEngineControls } from './controls/engineControls';

export function initializeDeveloperUI(runtime) {

  const root =
    document.getElementById('drill-root');

    const editor =
        createEditorState()

  const appWindow =
    createDrillAppWindow(
        runtime,
        editor
        );

  root.appendChild(
    appWindow.root
  );

  bindEngineControls(runtime);

  return {
    viewport:
      appWindow.viewport,

      editor
  };
}
