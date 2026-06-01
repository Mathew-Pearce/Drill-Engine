/**
 * Finds a single entity by its unique id.
 *
 * Useful for:
 * - target lookups
 * - quest objectives
 * - specific world references
 *
 * @param entities Array of world entities.
 * @param id Entity identifier.
 * @returns Matching entity or undefined.
 */
export function getEntitiesById(
    entities,
    id
){
     return entities.find(
        entity => entity.id === id
     );
}
