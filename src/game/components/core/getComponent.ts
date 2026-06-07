export function getComponent(
    entity,
    type
  ) {
    return entity.components?.[type];
  }