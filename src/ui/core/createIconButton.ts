export function createIconButton(
  iconSrc,
  title
) {
  const tones = {
    green: { color: '76,255,76', background: '#0a140a' },
    red: { color: '255,76,76', background: '#140808' },
    amber: { color: '255,170,60', background: '#160f06' },
    cyan: { color: '60,190,255', background: '#061016' },
    neutral: { color: '208,208,208', background: '#080808' },
  };

  let tone = 'green';
  let isActive = false;
  let isWarning = false;
  let isHovering = false;

  const button = document.createElement('button');
  const icon = document.createElement('img');

  icon.src = iconSrc;
  icon.alt = title;
  icon.style.width = '18px';
  icon.style.height = '18px';
  icon.style.pointerEvents = 'none';

  button.appendChild(icon);
  button.title = title;

  button.style.width = '34px';
  button.style.height = '34px';
  button.style.display = 'flex';
  button.style.alignItems = 'center';
  button.style.justifyContent = 'center';
  button.style.background = '#080808';
  button.style.border = '1px solid #333';
  button.style.borderRadius = '4px';
  button.style.cursor = 'pointer';
  button.style.transition =
    'box-shadow 100ms ease, transform 100ms ease, border 100ms ease, background 100ms ease';

  function render() {
    const currentTone =
      tones[tone] ?? tones.green;

    button.style.transform =
      'scale(1)';

    if (button.disabled) {
      icon.style.filter =
        'brightness(0.45)';

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
          ? `brightness(2.2) drop-shadow(0 0 8px rgba(${currentTone.color},0.95))`
          : `brightness(1.85) drop-shadow(0 0 6px rgba(${currentTone.color},0.75))`;

      button.style.background =
        currentTone.background;

      button.style.boxShadow =
        isHovering
          ? `inset 0 0 14px rgba(${currentTone.color},0.24), 0 0 16px rgba(${currentTone.color},0.55)`
          : `inset 0 0 12px rgba(${currentTone.color},0.16), 0 0 12px rgba(${currentTone.color},0.38)`;

      button.style.border =
        `1px solid rgba(${currentTone.color},0.45)`;

      return;
    }

    if (isActive) {
      icon.style.filter =
        isHovering
          ? `brightness(2.3) drop-shadow(0 0 8px rgba(${currentTone.color},0.95))`
          : `brightness(1.95) drop-shadow(0 0 6px rgba(${currentTone.color},0.75))`;

      button.style.background =
        currentTone.background;

      button.style.boxShadow =
        isHovering
          ? `inset 0 0 14px rgba(${currentTone.color},0.24), 0 0 16px rgba(${currentTone.color},0.58)`
          : `inset 0 0 12px rgba(${currentTone.color},0.18), 0 0 12px rgba(${currentTone.color},0.44)`;

      button.style.border =
        `1px solid rgba(${currentTone.color},0.48)`;

      return;
    }

    icon.style.filter =
      isHovering
        ? `brightness(2.15) drop-shadow(0 0 6px rgba(${currentTone.color},0.45))`
        : `brightness(1.75) drop-shadow(0 0 3px rgba(${currentTone.color},0.22))`;

    button.style.background =
      currentTone.background;

    button.style.boxShadow =
      isHovering
        ? `inset 0 0 12px rgba(${currentTone.color},0.16), 0 0 10px rgba(${currentTone.color},0.30)`
        : `inset 0 0 10px rgba(${currentTone.color},0.10)`;

    button.style.border =
      isHovering
        ? `1px solid rgba(${currentTone.color},0.40)`
        : `1px solid rgba(${currentTone.color},0.28)`;
  }

  button.setIcon = nextIconSrc => {
    icon.src =
      nextIconSrc;
  };

  button.setTone = nextTone => {
    tone =
      nextTone;

    render();
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

    const currentTone =
      tones[tone] ?? tones.green;

    icon.style.filter =
      `brightness(2.4) drop-shadow(0 0 8px rgba(${currentTone.color},1))`;

    button.style.boxShadow =
      `inset 0 0 14px rgba(${currentTone.color},0.28), 0 0 18px rgba(${currentTone.color},0.75)`;

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