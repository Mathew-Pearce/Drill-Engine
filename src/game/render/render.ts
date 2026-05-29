export function createRenderer(canvas: HTMLCanvasElement){
    const ctx = canvas.getContext('2d')!;

    function render(state) {
        ctx.clearRect(0,0, canvas.width, canvas.height);

        state.entities.forEach(entity => {
            
            if(!entity.position) return;
            
            ctx.fillStyle = 'white';

            ctx.fillRect(
                entity.position.x,
                entity.position.y,
                5,
                5
            );
        });
    }
    return { render };
}