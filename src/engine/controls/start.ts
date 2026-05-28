export function processStart(runtime){

    if(runtime.getStatus() !== 'stopped')
    return;
    console.log('[Controls] START!');
    runtime.setTickRate(1000);
    runtime.start();
    runtime.setStatus('running');
}