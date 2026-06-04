export function createViewport() {

    const element =
        document.getElementById(
            'game-view'
        );

    const canvas =
        document.getElementById(
            'game'
        ) as HTMLCanvasElement;


    element.style.position =
        'relative';

    element.style.width =
        '800px';

    element.style.height =
        '600px';

    element.style.overflow =
        'hidden';

    canvas.width = 800;
    canvas.height = 600;

    canvas.style.background =
        'black';

    const uiLayer =
        document.createElement('div');

    uiLayer.style.position =
        'absolute';

    uiLayer.style.top =
            '0';

    uiLayer.style.left =
            '0';

    uiLayer.style.width =
            '100%';

    uiLayer.style.height = 
            '100%';
    uiLayer.style.pointerEvents =
    'none'
    element?.appendChild(
        uiLayer
    );
    return {
        element,
        canvas,
        uiLayer,
        mountOverlay(
            overlay
        ) {
            uiLayer.appendChild(
                overlay
            )
        }
        
    };
}