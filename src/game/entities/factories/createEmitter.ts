import { createEmitterComponent } from '../../components/emitter/createEmitterComponent'
import {createRenderableComponent } from '../../components/renderable/createRenderableComponent'
import { createEntityId } from '../../utils/createEntityId'


export function createEmitter(){
    return {
            id : createEntityId(
                'emitter'
            ),
            type: 'emitter',
    
            position: {
              x: 400,
              y: 300,
            },
            
            direction: {
              x: 1,
              y: 0,
           },

           markedForRemoval: false,
    
            components: {
              emitter: createEmitterComponent({
                pattern: 'radial',
                fireRate: 20,
                bulletCount: 12,
                visible: true,
              }),
              
              renderable: createRenderableComponent({
                color: 'magenta',
                shape: 'square',
                size: 20,
                visible: true
              }),
            },
    }
}