import {
  processStart,
  processPause,
  processResume,
  processStop,
  processStep,
  processFastForward,
} from '../../engine/controls';

import { createPanel } from '../core/createPanel';
import { bindRuntimeView } from '../core/bindRuntimeView';
import { createIconButton } from '../core/createIconButton';

export function createRuntimeToolbar(runtime) {

  const panel =
    createPanel();

  const ui =
    createControls(panel);

  ui.resetCheckbox.onchange = () => {

    runtime.getConfig().resetOnStop =
      ui.resetCheckbox.checked;
  };

  ui.startButton.onclick = () => {

    const status =
      runtime.getStatus();

    if (status === 'stopped') {
      processStart(runtime);
    }

    else if (status === 'paused') {
      processResume(runtime);
    }
  };

  ui.pauseButton.onclick = () =>
    processPause(runtime);

  ui.stopButton.onclick = () =>
    processStop(runtime);

  ui.stepButton.onclick = () =>
    processStep(runtime);

  ui.fastForwardButton.onclick = () =>
    processFastForward(runtime);

  function render() {

    const status =
      runtime.getStatus();

    syncUI(runtime, ui);

    ui.stateLabel.textContent =
      `State: ${status}`;

    ui.startButton.disabled =
      status === 'running';

    ui.pauseButton.disabled =
      status !== 'running';

    ui.stopButton.disabled =
      status === 'stopped';

    ui.stepButton.disabled =
      status !== 'paused';

    ui.fastForwardButton.disabled =
      status === 'stopped';
  }

  bindRuntimeView(
    runtime,
    render
  );

  return panel;
}

function createControls(panel) {

  panel.style.display =
    'flex';

  panel.style.justifyContent =
    'relative';

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

    controls.style.gap =
    '8px';

    panel.style.display =
    'grid';
  
    panel.style.gridTemplateColumns =
    '1fr auto 1fr';
  
    panel.style.alignItems =
    'center';

  const startButton =
    createIconButton(
      '▶',
      'Start / Resume'
    );

  const pauseButton =
    createIconButton(
      '⏸',
      'Pause'
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
  controls.appendChild(pauseButton);
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

  resetGroup.style.paddingRight =
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

  panel.appendChild(stateLabel);
  panel.appendChild(controls);
  const spacer =
  document.createElement('div');
  panel.appendChild(spacer);

  return {
    stateLabel,
    startButton,
    pauseButton,
    stopButton,
    stepButton,
    fastForwardButton,
    resetCheckbox,
  };
}

function syncUI(runtime, ui) {

  ui.resetCheckbox.checked =
    runtime.getConfig().resetOnStop;
}