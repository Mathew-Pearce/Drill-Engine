export function ensureRunning(runtime){
    if (runtime.getStatus() ===
        'paused'
    ) {
        runtime.setStatus(
            'running'
        );
    }
}