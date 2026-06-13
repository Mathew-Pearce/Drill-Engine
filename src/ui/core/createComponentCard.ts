export function createComponentCard(
    titleText,
    isOpen: true
) {
    const card = 
        document.createElement('div');

    card.style.background =
        '#080808';

    card.style.border =
    '1px 1px solid #222';

    card.style.margin = 
        '8px 4px';

    card.style.color =
        '#d0d0d0';
    
    card.style.boxShadow =
        '0 2.5px 6px rgba(0, 0, 0, 1)';

    card.style.border =
        '1px solid #222';
      
      card.style.borderLeft =
        isOpen
          ? '2px solid rgba(76, 255, 76, 0.35)'
          : '1px solid #222';

     card.style.boxShadow =
        isOpen
            ? `
                inset 2px 0 7px rgba(76, 255, 76, 0.1),
                0 0 6px rgba(76, 255, 76, 0.18),
                0 2px 6px rgba(0, 0, 0, 0.35)
              `
            : '0 2px 3px rgba(0, 0, 0, 0.35)';

    const header =
        document.createElement('div');

    header.textContent =
        titleText;
    
    header.style.background =
        '#1f1f1f';

    header.style.padding =
        '6px 8px';

    header.style.fontWeight =
        'bold';

    header.style.cursor =
        'pointer';
    header.style.color =
        '#d0d0d0';

    const body = 
        document.createElement('div');

    
    body.style.padding =
        '8px';

    card.appendChild(header);
    card.appendChild(body);

    return{
        card,
        header,
        body
    };
}