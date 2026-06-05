import { createPanel } from '../core/createPanel'
import {createTitle} from '../core/createTitle'

export function createHeaderBar() {

    const panel =
        createPanel();

    const title =
        createTitle('Drill-Engine');

    panel.appendChild(title);

    panel.style.height =
        '40px';

    panel.style.display =
        'flex';

    panel.style.alignItems =
        'center';

    panel.style.padding =
        '0 10px';

    return panel;
}