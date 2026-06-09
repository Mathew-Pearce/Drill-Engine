export function createEmitterComponent({
    pattern = 'radial',
    fireRate = 20,
    bulletCount = 12,
    timer = 0,
    canChangePattern = true,
    visible = true,
  }) {
  
    return {
      type: 'emitter',
      visible,
  
      pattern,
      fireRate,
      bulletCount,
      timer,
  
      options: {
        pattern: [
          'radial',
          'directional',
          'aimed',
        ],
      },
    };
  }