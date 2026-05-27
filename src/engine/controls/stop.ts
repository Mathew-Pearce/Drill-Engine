export function processStop(runtime){
    console.log('[Controls] STOP!');

    runtime.setRunning(false);
    runtime.stop();
}