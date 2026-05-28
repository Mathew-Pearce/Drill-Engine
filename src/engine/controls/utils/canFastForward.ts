export function canFastForward(runtime) {
    const status = 
        runtime.getStatus();

        return (
            status === 'running' ||
            status === 'paused'
        );
}