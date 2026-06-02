import { 
  processStart,
  processPause,
  processResume,
  processStop,
  processStep,
  processFastForward,} from  '../../../engine/controls';

export function createRuntimeToolbar(
  runtime
) {

  // =========================
  // Panel
  // =========================

  const panel =
    document.createElement('div');

  document.body.appendChild(
    panel
  );

  // =========================
  // Controls
  // =========================

  const stateLabel =
    document.createElement('div');

  const primaryButton =
    document.createElement('button');

  const stopButton =
    document.createElement('button');

  stopButton.textContent =
    'Stop';

  const stepButton =
    document.createElement('button');

  stepButton.textContent =
    'Step';

  const fastForwardButton =
    document.createElement('button');

  fastForwardButton.textContent =
    'Fast Forward';

  const resetCheckbox =
    document.createElement('input');

  resetCheckbox.type =
    'checkbox';

  const resetLabel =
    document.createElement('label');

  resetLabel.textContent =
    ' Reset On Stop';

  // =========================
  // Append Controls
  // =========================

  panel.appendChild(
    stateLabel
  );

  panel.appendChild(
    primaryButton
  );

  panel.appendChild(
    stopButton
  );

  panel.appendChild(
    stepButton
  );

  panel.appendChild(
    fastForwardButton
  );

  panel.appendChild(
    resetCheckbox
  );

  panel.appendChild(
    resetLabel
  );

   // =========================
  // Panel style
  // =========================

    panel.style.position = 'absolute';
    panel.style.top = '10px';
    panel.style.left = '10px';
    panel.style.padding = '10px';
    panel.style.border = '1px solid white';
    panel.style.background = '#111';
    panel.style.color = 'white';

  // =========================
  // Checkbox
  // =========================

  resetCheckbox.onchange = () => {

    const config =
      runtime.getConfig();
  
    config.resetOnStop =
      resetCheckbox.checked;
  };

  // =========================
// UI Sync
// =========================
function syncConfigUI() {

  resetCheckbox.checked =
    runtime.getConfig()
      .resetOnStop;
}

  // =========================
  // Render
  // =========================

  function render() {

    const status =
      runtime.getStatus();

     syncConfigUI(); 

    stateLabel.textContent =
      `State: ${status}`;

    // STOPPED

    if (
      status === 'stopped'
    ) {

      primaryButton.textContent =
        'Start';

      stopButton.style.display =
        'none';

      stepButton.style.display =
        'none';

      fastForwardButton.style.display =
        'none';
    }

    // RUNNING

    else if (
      status === 'running'
    ) {

      primaryButton.textContent =
        'Pause';

      stopButton.style.display =
        'inline-block';

      stepButton.style.display =
        'none';

      fastForwardButton.style.display =
        'inline-block';
    }

    // PAUSED

    else if (
      status === 'paused'
    ) {

      primaryButton.textContent =
        'Resume';

      stopButton.style.display =
        'inline-block';

      stepButton.style.display =
        'inline-block';

      fastForwardButton.style.display =
        'inline-block';
    }
  }

  // =========================
  // Primary Button
  // =========================

  primaryButton.onclick =
    () => {

      const status =
        runtime.getStatus();

      if (
        status === 'stopped'
      ) {

        processStart(
          runtime
        );

      } else if (
        status === 'running'
      ) {

        processPause(
          runtime
        );

      } else {

        processResume(
          runtime
        );
      }
    };

  // =========================
  // Stop
  // =========================

  stopButton.onclick =
    () => {

      processStop(
        runtime
      );
    };

  // =========================
  // Step
  // =========================

  stepButton.onclick =
    () => {

      processStep(
        runtime
      );
    };

  // =========================
  // Fast Forward
  // =========================

  fastForwardButton.onclick =
    () => {

      processFastForward(
        runtime
      );
    };

  // =========================
  // Runtime Subscription
  // =========================

  runtime.subscribe(
    render
  );

  render();
}