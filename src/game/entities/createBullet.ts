export function createBullet() {
    return{
        id: crypto.randomUUID(),
        type: 'bullet',
        position: { x: 0, y: 0},
        velocity: { x: 0, y: 0},
        lifetime: 120,
        active: true
    };
}