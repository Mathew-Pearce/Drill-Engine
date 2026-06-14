import {
  processStart,
  processPause,
  processResume,
  processStop,
  processStep,
  processFastForward,
} from '../../../engine/controls';

import { createPanel } from '../../core/createPanel';
import { bindRuntimeView } from '../../core/bindRuntimeView';
import { createRuntimeControls } from './createRuntimeControls'
import { renderRuntimeToolbar } from './renderRuntimeToolbar'

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

    renderRuntimeToolbar(
      runtime,
      ui,
      isFastForwarding
    );
  }

  render();

  bindRuntimeView(
    runtime,
    render
  );

  return panel;
}
