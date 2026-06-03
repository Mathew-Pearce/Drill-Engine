import {isDead } from '../utils/isDead'

export function deathSystem(state) {
    
    state.entities.forEach(entity =>{
        if (entity.health === undefined)
            return;

    if (isDead(entity)) {
        entity.markedForRemoval = true
        }
    });
    return state;
}