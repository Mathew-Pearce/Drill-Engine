export function stop(runtime){
    console.log('[Controls] STOP!');

    runtime.setRunning(false);
    runtime.haltLoop();
}