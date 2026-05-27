import { processStart } from '../../engine/controls/start';
import { processPause } from '../../engine/controls/pause';
import { processResume } from '../../engine/controls/resume';
import { processStop } from '../../engine/controls/stop';
import { processStep } from '../../engine/controls/step';

export function bindEngineControls(runTime) {

    window.addEventListener("keydown", (e) => {
        if (e.code === "KeyR"){
          processStart(runTime);
        }
        if (e.code === "Space") {
          processPause(runTime);
        }
        if (e.code === "Enter") {
          processResume(runTime);
        }
        if (e.code === "KeyX"){
          processStop(runTime)
        }
        if (e.code === "KeyT"){
          processStep(runTime)
        }
      });
}
