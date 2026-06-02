import { 
  processStart,
  processPause,
  processResume,
  processStop,
  processStep,
  processFastForward,} from '../../engine/controls';


export function bindEngineControls(runtime) {

    window.addEventListener("keydown", (e) => {

      // 🟡 Developer controls only when holding Shift
      if (!e.ctrlKey)
        return;
      //Temporary prevent browser conflicts... ToDo think of another way, 
      e.preventDefault();

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