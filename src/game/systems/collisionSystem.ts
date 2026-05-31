import { isColliding } from '../utils/isColliding'

export function collisionSystem(state) {

    const player =
      state.entities.find(
        e => e.type === 'player'
      );
  
    const bullets =
      state.entities.filter(
        e => e.type === 'bullet'
      );
  
    bullets.forEach(bullet => {
  
      if (isColliding(player, bullet)) {
  
        console.log(
          '[HIT] player hit'
        );
  
        // later: health system
      }
    });
  
    return state;
  }