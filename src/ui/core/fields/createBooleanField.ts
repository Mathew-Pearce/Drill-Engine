export function createBooleanField(
    value,
    onChange,
    options = {}
  ) {
    const input =
      document.createElement('input');
  
    input.type =
      'checkbox';

    input.style.width 
      = '16px'

    input.style.height = 
      '16px';
  
    input.checked =
      value === true;
  
    input.onfocus = () => {
      options.onFocus?.();
    };
  
    input.onblur = () => {
      options.onBlur?.();
    };
  
    input.onchange = () => {
      onChange?.(
        input.checked
      );
    };
  
    return input;
  }