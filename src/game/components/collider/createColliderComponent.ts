export function createColliderComponent({
    layer = 'default',
    width = 10,
    height = 10,
    showContactMatrix = false,
    visible = true,
  }) {
  
    return {
      type: 'collider',
      visible,
  
      layer,
      width,
      height,

      showContactMatrix,
  
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