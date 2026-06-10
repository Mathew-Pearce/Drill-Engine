export const collisionRules = {
    enemyBullet: [
        'player',
        'wall',
    ],

    player: [
        'enemy',
        'wall'
    ],
    
}