export function processPause(runtime) {
    if (runtime.getStatus() !== 'running')
      return;
    console.log('[Controls] PAUSE!');

    runtime.setStatus('paused');
  }