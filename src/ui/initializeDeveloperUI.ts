import { createDrillAppWindow } from './views/createDrillAppWindow';
import { bindEngineControls } from './controls/engineControls';

export function initializeDeveloperUI(runtime) {

    const rootElement =
        document.getElementById('drill-root');

    const app =
        createDrillAppWindow(runtime);

    rootElement.appendChild(app.root);

    bindEngineControls(runtime);

    return {
        viewport:
            app.viewportWindow.viewport
    };
}
