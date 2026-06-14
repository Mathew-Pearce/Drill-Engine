import { createPanel } from '../../core/createPanel';
import { bindRuntimeView } from '../../core/bindRuntimeView';
import { createRuntimeControls } from './createRuntimeControls'
import { renderRuntimeToolbar } from './renderRuntimeToolbar'
import { wireRuntimeToolbarControls } from './wireRuntimeToolbarControls'

export function createRuntimeToolbar(runtime) {

  const panel =
    createPanel();

  panel.style.padding =
    '6px 0';

  const ui =
    createRuntimeControls(panel);

  const toolbarState = {
    isFastForwarding: false
  }

  wireRuntimeToolbarControls(
    runtime,
    ui,
    toolbarState
  )

 

  function render() {

    renderRuntimeToolbar(
      runtime,
      ui,
      toolbarState.isFastForwarding
    );
  }

  render();

  bindRuntimeView(
    runtime,
    render
  );

  return panel;
}
