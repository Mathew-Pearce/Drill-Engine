const keys: Record<string, boolean> = {};

export function bindKeys() {
    
    window.addEventListener('keydown', (e) => {
        keys[e.key] = true;
    });

    window.addEventListener('keyup', (e) => {
        keys[e.key] = false;
    });
}

export function isKeyDown(key: string) {
    return !!keys[key];
}