export function canLayersCollide(
    sourceLayer,
    targetLayer,
    rules,
) {
    const targets = 
        rules[sourceLayer];

    if (!targets)
        return false;

    return targets.includes(
        targetLayer
    );
}