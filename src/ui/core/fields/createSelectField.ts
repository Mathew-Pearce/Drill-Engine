export function createSelectField(
    value,
    optionsList,
    onChange,
    options = {}
  ) {
    const select =
      document.createElement('select');
  
    select.value =
      value;
  
    select.style.padding =
      '2px 4px';
  
    select.style.border =
      '1px solid #555';
  
    select.style.background =
      '#1f1f1f';
  
    select.style.color =
      'white';
  
    optionsList.forEach(optionValue => {
  
      const option =
        document.createElement('option');
  
      option.value =
        optionValue;
  
      option.textContent =
        optionValue;
  
      select.appendChild(
        option
      );
    });

    select.value = value;
  
    select.onfocus = () => {
      options.onFocus?.();
    };
  
    select.onblur = () => {
      options.onBlur?.();
    };
  
    select.onchange = () => {
      onChange?.(
        select.value
      );
    };
  
    return select;
  }