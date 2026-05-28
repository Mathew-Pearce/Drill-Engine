export function toggleFastForward(runtime){
const config =
    runtime.getConfig();

const currentRate =
    runtime.getTickRate();

if(
    currentRate ===
    config.defaultTickRate
) {

    runtime.setTickRate(
        config.fastForwardRate
    );

    console.log(
        '[CONTROLS] FAST FORWARD'
    );

    return;
}

runtime.setTickRate(
    config.defaultTickRate
);

console.log(
    '[CONTROLS] NORMAL SPEED'
);
}