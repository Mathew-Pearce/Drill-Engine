
export function processResume(runtime) {
    if (runtime.getStatus() !== 'paused')
        return;
    console.log('[Controls] RESUME!');
    runtime.setTickRate(1000);
    runtime.setStatus('running');
 
}