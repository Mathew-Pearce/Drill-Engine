import { createPanel } from '../core/createPanel'
import { createTitle } from '../core/createTitle'
import { createHeaderBar } from './createHeaderBar'
import { createViewportWindow } from './createViewportWindow'

export function createDrillAppWindow(runtime) {

    const root = createPanel();

    const header = createHeaderBar();
    const main = createPanel();

    const viewportWindow = createViewportWindow(runtime);
    const inspector = createPanel();

    main.style.display = 'flex';
    main.style.flexDirection = 'row';       

    const title =
    createTitle(
        'Inspector'
    );

    inspector.appendChild(
        title
    );

    main.appendChild(viewportWindow.frame);
    main.appendChild(inspector);

    root.appendChild(header);
    root.appendChild(main);

    return {
        root,
        viewportWindow,
        inspector
    };
}