export function bindGameOverOverlay(runtime, overlay) {

    runtime.subscribe(state => {

        overlay.style.display =
            state.game.isGameOver
                ? 'flex'
                : 'none';
    });
}