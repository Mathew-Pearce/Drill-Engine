import { createGameOverOverlay } from './createGameOverOverlay';
import { bindGameOverOverlay } from './bindGameOverOverlay';
import { processStart } from '../../engine/controls/start';

export function initializeGameUI(runtime) {

    const overlay =
        createGameOverOverlay(runtime);

    bindGameOverOverlay(runtime, overlay);

    // restart already handled inside overlay
}