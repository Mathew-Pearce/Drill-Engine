import { createBullet } from './createBullet'

let pool = [];

export function getBullet(){
    return pool.pop() || createBullet();
}



export function releaseBullet(bullet) {
    pool.push(bullet);
}