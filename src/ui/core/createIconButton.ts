export function createIconButton(
  iconSrc,
  title
) {

  const button =
    document.createElement('button');

  const icon =
    document.createElement('img');

  icon.src =
    iconSrc;

  icon.alt =
    title;

  icon.style.width =
    '18px';

  icon.style.height =
    '18px';

  icon.style.pointerEvents =
    'none';

  icon.style.filter =
    'brightness(0.85)';

  button.appendChild(
    icon
  );

  let isActive =
    false;

  let isWarning =
    false;

  let isHovering =
    false;

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

  button.style.transition =
    'box-shadow 100ms ease, transform 100ms ease, border 100ms ease, background 100ms ease';

  function render() {

    button.style.transform =
      'scale(1)';

    if (button.disabled) {

      icon.style.filter =
        'brightness(0.25)';

      button.style.background =
        '#080808';

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

      icon.style.filter =
        isHovering
          ? 'brightness(2) drop-shadow(0 0 8px rgba(255,76,76,0.9))'
          : 'brightness(1.55) drop-shadow(0 0 5px rgba(255,76,76,0.65))';

      button.style.background =
        isHovering
          ? '#170808'
          : '#100808';

      button.style.boxShadow =
        isHovering
          ? 'inset 0 0 14px rgba(255,76,76,0.22), 0 0 16px rgba(255,76,76,0.5)'
          : 'inset 0 0 10px rgba(255,76,76,0.14), 0 0 10px rgba(255,76,76,0.32)';

      button.style.border =
        '1px solid rgba(255,76,76,0.45)';

      return;
    }

    if (isActive) {

      icon.style.filter =
        isHovering
          ? 'brightness(2) drop-shadow(0 0 8px rgba(76,255,76,0.9))'
          : 'brightness(1.7) drop-shadow(0 0 6px rgba(76,255,76,0.7))';

      button.style.background =
        isHovering
          ? '#0d1a0d'
          : '#0a140a';

      button.style.boxShadow =
        isHovering
          ? 'inset 0 0 14px rgba(76,255,76,0.22), 0 0 16px rgba(76,255,76,0.55)'
          : 'inset 0 0 12px rgba(76,255,76,0.16), 0 0 12px rgba(76,255,76,0.42)';

      button.style.border =
        '1px solid rgba(76,255,76,0.45)';

      return;
    }

    icon.style.filter =
      isHovering
        ? 'brightness(1.35) drop-shadow(0 0 4px rgba(76,255,76,0.35))'
        : 'brightness(0.85)';

    button.style.background =
      '#080808';

    button.style.boxShadow =
      isHovering
        ? '0 0 8px rgba(76,255,76,0.22)'
        : 'none';

    button.style.border =
      '1px solid #333';
  }

  button.setIcon = nextIconSrc => {

    icon.src =
      nextIconSrc;
  };

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

    icon.style.filter =
      'brightness(2.2) drop-shadow(0 0 8px rgba(76,255,76,1))';

    button.style.boxShadow =
      'inset 0 0 14px rgba(76,255,76,0.25), 0 0 18px rgba(76,255,76,0.7)';

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