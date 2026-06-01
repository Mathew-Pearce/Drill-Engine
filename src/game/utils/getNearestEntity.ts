import { distance } from './distance'

/**
 * Finds the nearest entity from a collection.
 *
 * Useful for:
 * - AI targeting
 * - turret systems
 * - nearest pickup logic
 *
 * @param source Source entity.
 * @param entities Candidate entities.
 * @returns Closest entity or undefined.
 */

export function getNearestEntity(
    source,
    entities
){
    let nearest;
    let nearestDistance =
        Infinity;

    entities.forEach(entity => {
        distance(
            source.position,
            entity.position
        );

    if (
        currentDistance <
        nearestDistance
    ){
        nearest = entity;

        nearestDistance = currentDistance;
    }
    });
    return nearest;
}