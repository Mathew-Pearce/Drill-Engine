export function processStep(runtime){

    if (runtime.getStatus() !== 'paused')
        return;
    console.log('[CONTROLS] STEP!')

    runtime.step()
}