import { processStart } from '../../engine/controls/start';
import { processPause } from '../../engine/controls/pause';
import { processResume } from '../../engine/controls/resume';
import { processStop } from '../../engine/controls/stop';
import { processStep } from '../../engine/controls/step';
import { processFastForward }from '../../engine/controls/fastForward';

export function bindEngineControls(runtime) {

    window.addEventListener("keydown", (e) => {
        if (e.code === "KeyR"){
          processStart(runtime);
        }
        if (e.code === "Space") {
          processPause(runtime);
        }
        if (e.code === "Enter") {
          processResume(runtime);
        }
        if (e.code === "KeyX"){
          processStop(runtime);
        }
        if (e.code === "KeyT"){
          processStep(runtime);
        }
        if (e.code === "KeyF"){
          processFastForward(runtime);
        }
        if (e.code === "KeyG"){
          const config =
      runtime.getConfig();

    config.resetOnStop =
      !config.resetOnStop;

    console.log(
      '[Controls] resetOnStop:',
      config.resetOnStop
    );
        }
      });
}
