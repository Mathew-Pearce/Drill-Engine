export function createDivider() {

    const divider =
      document.createElement('hr');
  
    divider.style.width =
      '100%';
  
    divider.style.border =
      'none';
  
    divider.style.borderTop =
      '1px solid #555';
  
    return divider;
  }