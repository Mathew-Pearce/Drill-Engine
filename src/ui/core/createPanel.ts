import { UI_THEME } from './theme'
export function createPanel() {
    
    const panel = 
        document.createElement('div');

        panel.style.background =
        UI_THEME.panelBorder,

        panel.style.border =
        UI_THEME.panelBorder,
    
        panel.style.color =
        UI_THEME.text;
    

    return panel;
}