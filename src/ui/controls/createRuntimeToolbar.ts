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

    panel.style.padding =
    '6px 0';

  const ui =
    createControls(panel);

  let isFastForwarding =
    false;

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

    else if (status === 'running') {

      if (isFastForwarding) {
        processFastForward(runtime);

        isFastForwarding =
          false;
      }

      processPause(runtime);
    }

    else if (status === 'paused') {
      processResume(runtime);
    }
  };

  ui.stopButton.onclick = () => {

    processStop(runtime);

    isFastForwarding =
      false;
  };

  ui.stepButton.onclick = () => {

    processStep(runtime);

    ui.stepButton.flash();
  };

  ui.fastForwardButton.onclick = () => {

    if (runtime.getStatus() !== 'running')
      return;

    processFastForward(runtime);

    isFastForwarding =
      !isFastForwarding;
  };

  function render() {

    const status =
      runtime.getStatus();

    syncUI(runtime, ui);

    ui.stateLabel.textContent =
      `State: ${status}`;

    if (status === 'running') {

      ui.startButton.textContent =
        '⏸';

      ui.startButton.title =
        'Pause';
    }

    else if (status === 'paused') {

      ui.startButton.textContent =
        '▶';

      ui.startButton.title =
        'Resume';
    }

    else {

      ui.startButton.textContent =
        '▶';

      ui.startButton.title =
        'Start';
    }

    ui.startButton.disabled =
      false;

    ui.stopButton.disabled =
      status === 'stopped';

    ui.stepButton.disabled =
      status !== 'paused';

    ui.fastForwardButton.disabled =
      status !== 'running';

    ui.startButton.setActive(
      status === 'running' &&
      !isFastForwarding
    );

    ui.stopButton.setActive(
      false
    );

    ui.stopButton.setWarning(
      status !== 'stopped'
    );

    ui.fastForwardButton.setActive(
      status === 'running' &&
      isFastForwarding
    );
  }

  bindRuntimeView(
    runtime,
    render
  );

  return panel;
}

function createControls(panel) {

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
    resetCheckbox,
  };
}

function syncUI(runtime, ui) {

  ui.resetCheckbox.checked =
    runtime.getConfig().resetOnStop;
}