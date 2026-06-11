import { createTransformComponent } from '../../components/transform/createTransformComponent'
import { createHealthComponent } from '../../components/health/createHealthComponent'
import {createRenderableComponent } from '../../components/renderable/createRenderableComponent'
import { createColliderComponent } from '../../components/collider/createColliderComponent'


export function createPlayer(){
    return {

            id: 'player',
            type: 'player',

            velocity: { x: 1, y: 0,},
            maxHealth: 3,
            markedForRemoval: false,

            components: {
              transform: createTransformComponent({
                x: 100,
                y: 100, 
                visible: true
              }),
    
              health: createHealthComponent({
                currentHealth: 3,
                visible: true,
              }),
    
              renderable: createRenderableComponent({
                color: 'cyan',
                shape: 'square',
                size: 20,
                visible: true
              }),
    
              collider: createColliderComponent({
                layer: 'player',
                width: 20,
                height: 20,
                visible: true
              })
            },
    }
};
