export function createIconButton(
    icon,
    title
) {
    const button = 
        document.createElement('button');

    button.textContent =
        icon;

    button.title =
        title;

    button.style.width =
        '34px';

    button.style.height =
        '34px';

    button.style.flex =
        'flex';
    
    button.style.alignItems =
        'center';

        button.style.justifyContent =
        'center';
    
      button.style.background =
        '#080808';
    
      button.style.color =
        '#d0d0d0';
    
      button.style.border =
        '1px solid #333';
    
      button.style.borderRadius =
        '4px';
    
      button.style.cursor =
        'pointer';
    
      button.style.fontSize =
        '16px';
    
      button.style.transition =
        'box-shadow 100ms ease, transform 100ms ease, color 100ms ease';
    
    button.onmouseenter = () => {
    
        button.style.color =
            '#8cff8c';
    
        button.style.boxShadow =
            '0 0 8px rgba(76,255,76,0.25)';
      };
    
    button.onmouseleave = () => {
    
        button.style.color =
          '#d0d0d0';
    
        button.style.boxShadow =
          'none';
    
        button.style.transform =
          'scale(1)';
    };
    
    button.onmousedown = () => {
    
        button.style.transform =
          'scale(0.92)';
    };
    
    button.onmouseup = () => {
    
        button.style.transform =
          'scale(1)';
    };
    
      return button;
}
