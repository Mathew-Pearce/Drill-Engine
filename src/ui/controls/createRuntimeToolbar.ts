import {
  processStart,
  processPause,
  processResume,
  processStop,
  processStep,
  processFastForward,
} from '../../engine/controls';

import { createPanel } from '../core/createPanel'
import { createButton } from '../core/createButton'
import { bindRuntimeView } from '../core/bindRuntimeView'

export function createRuntimeToolbar(runtime) {

  // =========================
  // Panel
  // =========================

  const panel = createPanel();
  document.body.appendChild(
    panel
  );

  // =========================
  // Controls
  // =========================

  const ui = createControls(panel);

  // =========================
  // Checkbox binding
  // =========================

  ui.resetCheckbox.onchange = () => {

    runtime.getConfig().resetOnStop =
      ui.resetCheckbox.checked;
  };

  // =========================
  // Render loop
  // =========================

  function render() {

    const status = runtime.getStatus();

    syncUI(runtime, ui);

    ui.stateLabel.textContent =
      `State: ${status}`;

    if (status === 'stopped') {

      ui.primaryButton.textContent = 'Start';

      ui.stopButton.style.display = 'none';
      ui.stepButton.style.display = 'none';
      ui.fastForwardButton.style.display = 'none';
    }

    else if (status === 'running') {

      ui.primaryButton.textContent = 'Pause';

      ui.stopButton.style.display = 'inline-block';
      ui.stepButton.style.display = 'none';
      ui.fastForwardButton.style.display = 'inline-block';
    }

    else if (status === 'paused') {

      ui.primaryButton.textContent = 'Resume';

      ui.stopButton.style.display = 'inline-block';
      ui.stepButton.style.display = 'inline-block';
      ui.fastForwardButton.style.display = 'inline-block';
    }
  }

  // =========================
  // Primary control
  // =========================

  ui.primaryButton.onclick = () => {

    const status = runtime.getStatus();

    if (status === 'stopped') {
      processStart(runtime);
    } else if (status === 'running') {
      processPause(runtime);
    } else {
      processResume(runtime);
    }
  };

  ui.stopButton.onclick = () =>
    processStop(runtime);

  ui.stepButton.onclick = () =>
    processStep(runtime);

  ui.fastForwardButton.onclick = () =>
    processFastForward(runtime);

  // =========================
  // Subscription
  // =========================

  bindRuntimeView(
    runtime,
    render
  );
}

/* =========================================================
   Internal UI helpers (same module, clearer structure)
========================================================= */

function createControls(panel) {

  const stateLabel = document.createElement('div');

  const primaryButton = createButton('');

  const stopButton = createButton('Stop');

  const stepButton = createButton('Step');

  const fastForwardButton = createButton('Fast Forward');

  const resetCheckbox = document.createElement('input');
  resetCheckbox.type = 'checkbox';

  const resetLabel = document.createElement('label');
  resetLabel.textContent = ' Reset On Stop';

  panel.appendChild(stateLabel);
  panel.appendChild(primaryButton);
  panel.appendChild(stopButton);
  panel.appendChild(stepButton);
  panel.appendChild(fastForwardButton);
  panel.appendChild(resetCheckbox);
  panel.appendChild(resetLabel);

  return {
    stateLabel,
    primaryButton,
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