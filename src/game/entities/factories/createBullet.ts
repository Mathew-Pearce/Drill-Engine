import { createRenderableComponent } from '../../components/renderable/createRenderableComponent'
import { createColliderComponent } from '../../components/collider/createColliderComponent'
export function createBullet() {
    return{
        id: crypto.randomUUID(),
        type: 'bullet',
        size: 6,
        position: { x: 0, y: 0},
        velocity: { x: 0, y: 0},
        lifetime: 120,
        active: true,
        markedForRemoval: false,

        components: {
            renderable: createRenderableComponent({
            color: 'red',
            shape: 'square',
            size: 6,
            visible: true
            }),

            collider: createColliderComponent({
                layer: 'bullet',
                width: 6,
                height: 6,
                visible: true,
            })
        }
    };
}