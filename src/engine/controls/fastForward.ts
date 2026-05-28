export function processFastForward(runtime){

    const status =
        runtime.getStatus();

    if(
        status !== 'running' &&
        status !== 'paused'
    ) return;

    if (status === 'paused') {

        runtime.setStatus(
            'running'
        );
    }

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
  