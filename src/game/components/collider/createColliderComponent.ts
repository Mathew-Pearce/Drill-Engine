export function createColliderComponent({
    layer = 'default',
    width = 10,
    height = 10,
    visible = true,
  }) {
  
    return {
      type: 'collider',
      visible,
  
      layer,
      width,
      height,
  
      options: {
        layer: [
          'default',
          'player',
          'enemy',
          'playerBullet',
          'enemyBullet',
          'wall',
          'pickup',
        ],
      },
    };
  }