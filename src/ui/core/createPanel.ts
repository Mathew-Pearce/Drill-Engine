export function createPanel() {
    
    const panel = 
        document.createElement('div');

    panel.style.position =
    'absolue';

    panel.style.top =
    '10px'

    panel.style.left =
    '10px';

    panel.style.padding =
    '10px';

    panel.style.boarder =
    '1px solid white';

    panel.style.background =
    '#111';

    panel.style.color =
    'white';

    return panel;

}