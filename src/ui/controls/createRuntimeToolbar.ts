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
import {createRuntimeControls } from './createRuntimeControls'

export function createRuntimeToolbar(runtime) {

  const panel =
    createPanel();

  panel.style.padding =
    '6px 0';

  const ui =
    createRuntimeControls(panel);

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


function syncUI(runtime, ui) {

  ui.resetCheckbox.checked =
    runtime.getConfig().resetOnStop;
}