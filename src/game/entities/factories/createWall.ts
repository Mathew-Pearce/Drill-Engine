import {createRenderableComponent } from '../../components/renderable/createRenderableComponent'
import { createColliderComponent } from '../../components/collider/createColliderComponent'
import { createTransformComponent } from '../../components/transform/createTransformComponent'
import { createEntityId } from '../../utils/createEntityId'

export function createWall(){

        return {
        id: createEntityId('wall'),
        type: 'wall',
        markedForRemoval: false,

        components: {
          transform: createTransformComponent({
            x: 300,
            y: 220,
            visible: true,
          }),
      
          renderable: createRenderableComponent({
            color: 'gray',
            shape: 'square',
            width: 160,
            height: 40,
            visible: true,
          }),
      
          collider: createColliderComponent({
            layer: 'wall',
            width: 160,
            height: 40,
            visible: true,
          }),
        },
    }
}