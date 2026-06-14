import {
    processStart,
    processPause,
    processResume,
    processStop,
    processStep,
    processFastForward,
  } from '../../../engine/controls';

  export function wireRuntimeToolbarControls( 
    runtime,
    ui,
    toolbarState
    ) {
        
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
        
              if (toolbarState.isFastForwarding) {
                processFastForward(runtime);
        
                toolbarState.isFastForwarding =
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
        
            toolbarState.isFastForwarding =
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
        
            toolbarState.isFastForwarding =
              !toolbarState.isFastForwarding;
          };
    }