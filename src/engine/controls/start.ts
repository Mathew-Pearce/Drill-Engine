export function processStart(runtime){

    if(runtime.getStatus() !== 'stopped')
    return;

    const config = 
    runtime.getConfig();
    console.log('[Controls] START!');
    runtime.setTickRate(config.defaultTickRate);
    runtime.start();
    runtime.setStatus('running');
}