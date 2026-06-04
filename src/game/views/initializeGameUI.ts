import { createGameOverOverlay } from './createGameOverOverlay';
import { bindGameOverOverlay } from './bindGameOverOverlay';
import { processStart } from '../../engine/controls/start';

export function initializeGameUI(
    runtime,
    viewport
    ) {

    const overlay =
        createGameOverOverlay(
            runtime,
            viewport
            );

    bindGameOverOverlay(runtime, overlay);

    // restart already handled inside overlay
}