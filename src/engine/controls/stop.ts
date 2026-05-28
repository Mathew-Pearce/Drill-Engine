export function processStop(runtime){
    if (runtime.getStatus() !== 'running')
        return;
    console.log('[Controls] STOP!');
    runtime.setStatus('stopped')
    runtime.stop();
}