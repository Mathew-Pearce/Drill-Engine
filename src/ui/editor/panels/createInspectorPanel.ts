import { createPanel } from '../../core/createPanel';
import { createTitle } from '../../core/createTitle';

export function createInspectorPanel(
  runtime,
  editor
) {

  const panel =
    createPanel();

  panel.style.width =
    '240px';

  panel.style.flexShrink =
    '0';

  function render() {

    panel.innerHTML = '';

    panel.appendChild(
      createTitle('Inspector')
    );

    const selectedId =
      editor.getSelectedEntityId();

    const state =
      runtime.getState();

    const entity =
      state.entities.find(
        entity => entity.id === selectedId
      );

    if (!entity) {

      panel.appendChild(
        document.createTextNode(
          'No entity selected'
        )
      );

      return;
    }

    const output =
      document.createElement('pre');

    output.textContent =
      JSON.stringify(
        entity,
        null,
        2
      );

    panel.appendChild(
      output
    );
  }

  editor.subscribe(
    render
  );

  runtime.subscribe(
    render
  );

  render();

  return panel;
}