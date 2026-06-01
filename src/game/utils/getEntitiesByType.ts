/**
 * Returns all entities matching a given type.
 *
 * Useful for:
 * - finding all enemies
 * - finding all bullets
 * - finding all emitters
 *
 * @param entities Array of world entities.
 * @param type Entity type to search for.
 * @returns Array of matching entities.
 */

export function getEntitiesByType(
    entities,
    type
){
    return entities.filter(
        entity => entity.type === type
    );
}