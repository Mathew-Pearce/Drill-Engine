/**
 * Registers a runtime-driven view.
 *
 * Automatically subscribes
 * the render function and
 * performs an initial render.
 *
 * @param runtime Runtime instance.
 * @param render Render callback.
 */
export function bindRuntimeView(
    runtime,
    render
  ) {
  
    runtime.subscribe(
      render
    );
  
    render();
  }