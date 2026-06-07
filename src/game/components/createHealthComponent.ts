export function createHealthComponent({
    currentHealth,
    maxHealth,
    visible = false,
  }) {
  
    return {
      type: 'health',
  
      visible,
  
      currentHealth,
      maxHealth,
    };
  }