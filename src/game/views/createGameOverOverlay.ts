import { processStart } from '../../engine/controls/start'

export function createGameOverOverlay(runtime) {

    const overlay =
        document.createElement('div');

    const title =
        document.createElement('h2');

    const button =
        document.createElement('button');

    title.textContent = 'GAME OVER';
    button.textContent = 'Restart';

    overlay.appendChild(title);
    overlay.appendChild(button);

    const gameView =
        document.getElementById('game-view');

    gameView.appendChild(overlay);

    console.log('gameView:', gameView);
    console.log('overlay parent:', overlay.parentElement);
    console.log('gameView contains overlay:', gameView?.contains(overlay));

    // -------------------------
    // Styling (viewport scoped)
    // -------------------------

    overlay.style.position = 'absolute';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    gameView.style.overflow = 'hidden';

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