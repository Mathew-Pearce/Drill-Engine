import playIcon from '../../core/icons/play.svg'
import pauseIcon from '../../core/icons/pause.svg'

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
    
          ui.startButton.setIcon(
            pauseIcon
          );
    
          ui.startButton.title =
            'Pause';

        }
    
        else if (status === 'paused') {
    
          ui.startButton.setIcon(
            playIcon
          );
    
          ui.startButton.title =
            'Resume';
        }
    
        else {
    
          ui.startButton.setIcon(
            playIcon
          );
    
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

          ui.startButton.setTone(
            'green'
          );
          
          ui.stopButton.setTone(
            'red'
          );
          
          ui.stepButton.setTone(
            'amber'
          );
          
          ui.fastForwardButton.setTone(
            'cyan'
          );
    
        ui.startButton.setActive(
          status === 'running' &&
          !isFastForwarding
        );
    
        ui.stopButton.setActive(
          false
        );
    
        ui.stopButton.setActive(
          status !== 'stopped'
        );
        ui.stepButton.setActive(
          status === 'paused'
        );
    
        ui.fastForwardButton.setActive(
          status === 'running' &&
          isFastForwarding
        );
}