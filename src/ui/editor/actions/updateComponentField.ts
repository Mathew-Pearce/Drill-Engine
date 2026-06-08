export function updateComponentField({
    runtime,
    editor,
    entityId,
    componentType,
    path,
    value,
  }) {
  
    const state =
      runtime.getState();
  
    const entity =
      state.entities.find(
        entity => entity.id === entityId
      );
  
    if (!entity)
      return;
  
    const component =
      entity.components?.[componentType];
  
    if (!component)
      return;
  
    let target =
      component;
  
    for (let i = 0; i < path.length - 1; i++) {
      target =
        target[path[i]];
    }
  
    const finalKey =
      path[path.length - 1];
  
    target[finalKey] =
      value;
  
    editor.notifyChange();
  }