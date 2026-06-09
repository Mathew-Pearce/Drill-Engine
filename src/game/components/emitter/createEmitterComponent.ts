export function createEmitterComponent({
    pattern = 'radial',
    fireRate = 20,
    bulletCount = 12,
    canChangePattern = true,
    visible = true,
}) {
    return {
        type: 'emitter',

        visible,

        pattern,
        fireRate,
        bulletCount, 
        canChangePattern,

        options: {
            pattern: [
                'radial',
                'directional',
                'aimed',
            ],
        },
    };
}