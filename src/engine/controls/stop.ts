export function processStop(runtime){
    if (runtime.getStatus() !== 'running')
        return;

    const config =
        runtime.getConfig();

    console.log('[Controls] STOP!');
    if (config.resetOnStop) {

        runtime.reset();
      };

    runtime.stop();
    
    runtime.setStatus('stopped')
}