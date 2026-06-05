import { createPanel  } from '../core/createPanel'

export function createViewport() {

    const root = 
        document.getElementById(
            'drill-root'
        );

    const frame 
        = createPanel();

    const canvas =
            document.createElement(
                'canvas'
            );
    root.appendChild(
        frame
    );

    frame.appendChild(
        canvas
    );

    const uiLayer = 
        document.createElement(
            'div'
        );

    root.style.position =
        'relative';

    root.style.width =
        '800px';

    root.style.height =
        '600px';

    root.style.overflow =
        'hidden';

    canvas.width = 800;
    canvas.height = 600;

    canvas.style.background =
        'black';

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
    frame.appendChild(
        uiLayer
    );
    return {
        frame,
        canvas,
        uiLayer,

        width: 
            canvas.width,
        height:
            canvas.height,

        mountOverlay(
            overlay,
            options = []
        ) {

            const {
                width = '100%',
                height = '100%'
            } = options;

            overlay.style.position =
                'absolute';

            overlay.style.top =
                '0';

            overlay.style.left =
                '0';

            overlay.style.width =
                width;

            overlay.style.height =
                height;

            uiLayer.appendChild(
                overlay
            )
        }
        
    };
}