export function createBullet() {
    return{
        id: crypto.randomUUID(),
        type: 'bullet',
        size: 6,
        position: { x: 0, y: 0},
        velocity: { x: 0, y: 0},
        lifetime: 120,
        active: true,
        markedForRemoval: false
    };
}