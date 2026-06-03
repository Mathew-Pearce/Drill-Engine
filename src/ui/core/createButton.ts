/**
 * Creates a standard Drill UI button.
 *
 * @param text Display text.
 * @returns HTMLButtonElement
 */
export function createButton(
    text: string
  ) {
  
    const button =
      document.createElement(
        'button'
      );
  
    button.textContent =
      text;

      button.style.margin =
      '2px';
  
    button.style.padding =
      '4px 8px';
  
    button.style.background =
      '#222';
  
    button.style.color =
      'white';
  
    button.style.border =
      '1px solid #555';
  
    button.style.cursor =
      'pointer';

  
    return button;
  }