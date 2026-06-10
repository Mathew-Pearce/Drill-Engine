export function createRenderableComponent({
    color = 'white',
    shape = 'square',
    size = 5,
    visible = 'true'
}) 
{
    return {
        type: 'renderable',
        visible,

        color,
        shape,
        size
    };
}