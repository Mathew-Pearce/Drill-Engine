import { getBullet } from '../../entities/pools/bulletPool'
import { getEntityCenter } from '../../utils/getEntityCenter'

export function aimedPattern(
    entity,
    state,
    newEntities
){      
        //Find Player
        const player = state.entities.find(
            entity => entity.type === 'player'
        );

        // CALCULTE DIRECTION
        const dx =
        player.position.x -
        entity.position.x;
    
        const dy = 
        player.position.y -
        entity.position.y;
    
        const length = 
        Math.hypot(dx, dy);
    
        const direction = {
          x: dx / length,
    
          y: dy/ length,
        };
        
        const bullet = getBullet();

        const center = getEntityCenter(entity);
    
        bullet.position = {
          x:
          center.x -
          bullet.size / 2,
      
          y:
          center.y -
          bullet.size / 2,
        };
    
        bullet.velocity = {
          x: direction.x * 2,
    
          y: direction.y * 2,
        };
    
        newEntities.push(bullet);
}