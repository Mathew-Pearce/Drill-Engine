import { createPanel } from '../core/createPanel'
import { createViewport } from './createViewport'
import { createRuntimeToolbar } from '../controls/createRuntimeToolbar'

export function createViewportWindow(runtime) {
    const frame =
        createPanel();

    const VIEWPORT_WIDTH = 800;

    frame.style.width =
        `${VIEWPORT_WIDTH + 3}px`;

    frame.style.display =
        'flex';
    
    frame.style.flexDirection =
        'column';
    
    const toolbar =
        createRuntimeToolbar(runtime);

    const viewport =
        createViewport();

    console.log('toolbar:', toolbar);
    console.log('viewport.frame:', viewport.frame);

    frame.appendChild(toolbar);
    frame.appendChild(viewport.frame)


    return {
        frame, 
        toolbar,
        viewport
    };
}