import { syncRuntimeToolbar } from './syncRuntimeToolbar'

export function renderRuntimeToolbar(
    runtime,
    ui,
    isFastForwarding,
) { 

        const status =
          runtime.getStatus();
    
          syncRuntimeToolbar(
            runtime,
            ui
          );
    
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