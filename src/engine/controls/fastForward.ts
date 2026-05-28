export function processFastForward(runtime){
    if(runtime.getStatus() !== 'running')
        return;
    
    
    console.log('[CONTROLS] FAST FORWARD');

    runtime.setTickRate(100);
} 
  