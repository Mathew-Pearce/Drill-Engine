export function createReadOnlyField(
    value
  ) {
  
    const field =
      document.createElement('span');
  
    field.textContent =
      String(value);
  
    field.style.padding =
      '2px 6px';
  
    field.style.border =
      '1px solid #555';
  
    field.style.background =
      '#1f1f1f';
  
    field.style.color =
      'white';
  
    return field;
  }