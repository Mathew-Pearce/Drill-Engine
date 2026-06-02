export function processStop(runtime){
    const status = runtime.getStatus();

    if (status === 'stopped') return;

    const config =
        runtime.getConfig();

    console.log('[Controls] STOP!');
    if (config.resetOnStop) {

        runtime.reset();
      };

    runtime.stop();
    
    runtime.setStatus('stopped')
}