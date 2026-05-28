
export function processResume(runtime) {
    if (runtime.getStatus() !== 'paused')
        return;
    const config =
        runtime.getConfig();
    console.log('[Controls] RESUME!');
    runtime.setTickRate
        (config.defaultTickRate);
    runtime.setStatus('running');
}
