export function processStart(runtime){
    console.log('[Controls] START!');

    runtime.setRunning(true);
    runtime.start();
}