import { createButton } from '../../ui/core/createButton'
import { createOverlay } from '../../ui/core/createOverlay'
import { createTitle } from '../../ui/core/createTitle'
import { processStart } from '../../engine/controls/start'

export function createGameOverOverlay(
    runtime,
    viewport
    ) {

    const overlay =
        createOverlay();

    const title =
        createTitle('GAME OVER');

    const button =
        createButton('Restart');
    
    button.style.pointerEvents =
        'auto'

    overlay.appendChild(title);
    overlay.appendChild(button);

    viewport.mountOverlay(
        overlay, 
        {
            width: '100%',
            height: '100%'
        }
    );

    // -------------------------
    // Styling (viewport scoped)
    // -------------------------
  

    overlay.style.display = 'none';

    overlay.style.background = 'rgba(0,0,0,0.7)';
    overlay.style.color = 'white';

    overlay.style.display = 'none';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.flexDirection = 'column';

    overlay.style.textAlign = 'center';
    overlay.style.zIndex = '10';

    // -------------------------
    // Restart action
    // -------------------------

    button.onclick = () => {
        
        runtime.reset();
        processStart(runtime);
    };

    return overlay;
}