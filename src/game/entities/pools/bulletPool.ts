import { createBullet } from '../factories/createBullet'

let pool = [];

export function getBullet(){
    return pool.pop() || createBullet();
}



export function releaseBullet(bullet) {

        bullet.markedForRemoval = false;
      
        bullet.lifetime = 120;
      
        bullet.velocity = { x: 0, y: 0 };
      
        bullet.position = { x: 0, y: 0 };
      
        pool.push(bullet);
}