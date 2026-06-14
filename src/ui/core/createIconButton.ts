export function createIconButton(
  icon,
  title
) {

  const button =
    document.createElement('button');

  let isActive =
    false;

  let isWarning =
    false;

  let isHovering =
    false;

  button.textContent =
    icon;

  button.title =
    title;

  button.style.width =
    '34px';

  button.style.height =
    '34px';

  button.style.display =
    'flex';

  button.style.alignItems =
    'center';

  button.style.justifyContent =
    'center';

  button.style.background =
    '#080808';

  button.style.border =
    '1px solid #333';

  button.style.borderRadius =
    '4px';

  button.style.cursor =
    'pointer';

  button.style.fontSize =
    '16px';

  button.style.transition =
    'box-shadow 100ms ease, transform 100ms ease, color 100ms ease, border 100ms ease';

  function render() {

    button.style.transform =
      'scale(1)';

    if (button.disabled) {

      button.style.color =
        '#555';

      button.style.boxShadow =
        'none';

      button.style.border =
        '1px solid #222';

      button.style.cursor =
        'default';

      return;
    }

    button.style.cursor =
      'pointer';

    if (isWarning) {

      button.style.color =
        isHovering
          ? '#ffb0b0'
          : '#ff8c8c';

      button.style.boxShadow =
        isHovering
          ? '0 0 12px rgba(255, 76, 76, 0.45)'
          : '0 0 8px rgba(255, 76, 76, 0.28)';

      button.style.border =
        '1px solid rgba(255, 76, 76, 0.45)';

      return;
    }

    if (isActive) {

      button.style.color =
        '#8cff8c';

      button.style.boxShadow =
        isHovering
          ? '0 0 14px rgba(76, 255, 76, 0.5)'
          : '0 0 10px rgba(76, 255, 76, 0.35)';

      button.style.border =
        '1px solid rgba(76, 255, 76, 0.45)';

      return;
    }

    button.style.color =
      isHovering
        ? '#8cff8c'
        : '#d0d0d0';

    button.style.boxShadow =
      isHovering
        ? '0 0 8px rgba(76, 255, 76, 0.22)'
        : 'none';

    button.style.border =
      '1px solid #333';
  }

  button.setActive = active => {

    isActive =
      active === true;

    render();
  };

  button.setWarning = active => {

    isWarning =
      active === true;

    render();
  };

  button.flash = () => {

    if (button.disabled)
      return;

    button.style.boxShadow =
      '0 0 14px rgba(76, 255, 76, 0.65)';

    button.style.transform =
      'scale(0.92)';

    setTimeout(() => {

      render();

    }, 120);
  };

  button.onmouseenter = () => {

    isHovering =
      true;

    render();
  };

  button.onmouseleave = () => {

    isHovering =
      false;

    render();
  };

  button.onmousedown = () => {

    if (button.disabled)
      return;

    button.style.transform =
      'scale(0.92)';
  };

  button.onmouseup = () => {

    render();
  };

  render();

  return button;
}