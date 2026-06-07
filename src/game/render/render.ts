import { getPosition } from '../components/transform/getPosition'

export function createRenderer(canvas: HTMLCanvasElement) {

    const ctx = canvas.getContext('2d')!;
  
    function render(state) {
  
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      state.entities.forEach(entity => {

        const position = 
          getPosition(entity);
  
        if (!position) return;
  
        // DEFAULTS
        let color = 'white';
        let size = 5;
  
        // TYPE STYLING
        if (entity.type === 'bullet') {
          color = 'red';
          size = entity.size;
        }
  
        if (entity.type === 'player') {
          color = 'cyan';
          size =  entity.size;
        }
  
        if (entity.type === 'emitter') {
          color = 'magenta';
          size =  entity.size;
        }
  
        ctx.fillStyle = color;
  
        ctx.fillRect(
          position.x,
          position.y,
          size,
          size
        );
      });
    }
  
    return { render };
  }