export function createRenderableComponent({
    color = 'white',
    shape = 'square',
    size = 5,
    width,
    height,
    visible = 'true'
}) 
{
    return {
        type: 'renderable',
        visible,

        color,
        shape,
        size,
        width,
        height
    };
}