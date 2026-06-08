export function createNumberField(
    value,
    onChange
  ) {
  
    const input =
      document.createElement('input');
  
    input.type =
      'number';
  
    input.value =
      String(value);
  
    input.style.width =
      '60px';
  
    input.style.padding =
      '2px 4px';
  
    input.style.border =
      '1px solid #555';
  
    input.style.background =
      '#1f1f1f';
  
    input.style.color =
      'white';
  
    input.onchange = () => {
  
      if (!onChange)
        return;
  
      onChange(
        Number(input.value)
      );
    };
  
    return input;
  }