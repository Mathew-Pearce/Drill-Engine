export function createRenderer(canvas: HTMLCanvasElement) {

    const ctx = canvas.getContext('2d')!;
  
    function render(state) {
  
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      state.entities.forEach(entity => {
  
        if (!entity.position) return;
  
        // DEFAULTS
        let color = 'white';
        let size = 5;
  
        // TYPE STYLING
        if (entity.type === 'bullet') {
          color = 'red';
          size = 8;
        }
  
        if (entity.type === 'player') {
          color = 'cyan';
          size = 8;
        }
  
        if (entity.type === 'emitter') {
          color = 'magenta';
          size = 8;
        }
  
        ctx.fillStyle = color;
  
        ctx.fillRect(
          entity.position.x,
          entity.position.y,
          size,
          size
        );
      });
    }
  
    return { render };
  }