export function createRuntimeStatusIndicator() {

    const container =
      document.createElement('div');
  
    container.style.display =
      'flex';
  
    container.style.alignItems =
      'center';
  
    container.style.gap =
      '8px';
  
    container.style.color =
      '#d0d0d0';
  
    container.style.paddingLeft =
      '8px';
  
    container.style.minWidth =
      '120px';
  
    const led =
      document.createElement('div');
  
    led.style.width =
      '10px';
  
    led.style.height =
      '10px';
  
    led.style.borderRadius =
      '50%';
  
    const label =
      document.createElement('div');
  
    function setStatus(status) {
  
      label.textContent =
        status.toUpperCase();
  
      if (status === 'running') {
  
        led.style.background =
          '#4cff4c';
  
        led.style.boxShadow =
          '0 0 8px rgba(76,255,76,0.75)';
      }
  
      else if (status === 'paused') {
  
        led.style.background =
          '#ffaa3c';
  
        led.style.boxShadow =
          '0 0 8px rgba(255,170,60,0.75)';
      }
  
      else {
  
        led.style.background =
          '#ff4c4c';
  
        led.style.boxShadow =
          '0 0 8px rgba(255,76,76,0.65)';
      }
    }
  
    container.appendChild(led);
    container.appendChild(label);
  
    setStatus('stopped');
  
    return {
      element: container,
      setStatus,
    };
  }