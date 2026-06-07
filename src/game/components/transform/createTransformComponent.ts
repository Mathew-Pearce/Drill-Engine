export function createTransformComponent({
    x = 0,
    y = 0,
    rotation = 0,
    visible = true,
}) {
    return {
        type: 'transform',
        visible,

        position:
         {
            x,
            y,
         },

         rotation,
    };
}