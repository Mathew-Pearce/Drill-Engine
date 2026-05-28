import { canFastForward } from './utils/canFastForward'
import { ensureRunning } from './utils/ensureRunning'
import { toggleFastForward } from './utils/timing/toggleFastForward'


export function processFastForward(runtime){

    if(!canFastForward(runtime)) return;

    ensureRunning(runtime);
    
    toggleFastForward(runtime);

}
  
