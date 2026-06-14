import { createPanel } from '../core/createPanel';
import { createIconButton } from '../core/createIconButton';

export function createRuntimeControls(panel) {
     

        panel.style.display =
          'grid';
      
        panel.style.gridTemplateColumns =
          '1fr auto 1fr';
      
        panel.style.alignItems =
          'center';
      
        panel.style.gap =
          '8px';
      
        panel.style.background =
          '#1f1f1f';
      
        panel.style.borderBottom =
          '1px solid #444';
      
        const stateLabel =
          document.createElement('div');
      
        stateLabel.style.color =
          '#d0d0d0';
      
        stateLabel.style.paddingLeft =
          '8px';
      
        stateLabel.style.minWidth =
          '120px';
      
        const controls =
          document.createElement('div');
      
        controls.style.display =
          'flex';
      
        controls.style.alignItems =
          'center';
      
        controls.style.justifyContent =
          'center';
      
        controls.style.gap =
          '8px';
      
        const startButton =
          createIconButton(
            '▶',
            'Start'
          );
      
        const stopButton =
          createIconButton(
            '■',
            'Stop'
          );
      
        const stepButton =
          createIconButton(
            '⏭',
            'Step'
          );
      
        const fastForwardButton =
          createIconButton(
            '⏩',
            'Fast Forward'
          );
      
        controls.appendChild(startButton);
        controls.appendChild(stopButton);
        controls.appendChild(stepButton);
        controls.appendChild(fastForwardButton);
      
        const resetGroup =
          document.createElement('label');
      
        resetGroup.style.display =
          'flex';
      
        resetGroup.style.alignItems =
          'center';
      
        resetGroup.style.gap =
          '4px';
      
        resetGroup.style.color =
          '#d0d0d0';
      
        resetGroup.style.paddingLeft =
          '8px';
      
        const resetCheckbox =
          document.createElement('input');
      
        resetCheckbox.type =
          'checkbox';
      
        resetGroup.appendChild(resetCheckbox);
      
        resetGroup.appendChild(
          document.createTextNode(
            'Reset On Stop'
          )
        );
        controls.appendChild(resetGroup);

  const spacer =
    document.createElement('div');

  panel.appendChild(stateLabel);
  panel.appendChild(controls);
  panel.appendChild(spacer);

  return {
    stateLabel,
    startButton,
    stopButton,
    stepButton,
    fastForwardButton,
    resetCheckbox
  };
}