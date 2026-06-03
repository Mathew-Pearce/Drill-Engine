import { getEntitiesById } from '../utils/getEntitiesById';

export function gameOverSystem(state) {
    const player = 
        getEntitiesById(
            state.entities,
            'player'
        );

        if (!player){
            state.game.isGameOver = true;
        }

        return state;
}