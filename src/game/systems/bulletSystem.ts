import { getBullet } from '../entities/bulletPool'

export function bulletSystem(state){
    if (Math.random() < 0.05) {
        const bullet = getBullet();

        bullet.position = {x: 0, y: 0},
        bullet.velocity = {x: 2, y: 0}, 

        state.entities.push(bullet);
    }
    return state;
}