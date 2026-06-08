import { createPanel } from '../../../core/createPanel';
import { createTitle } from '../../../core/createTitle';
import { createDivider } from '../../../core/createDivider';

import { renderEntityIdentity } from './renderEntityIdentity';
import { renderComponentSection } from './renderComponentSection';

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

    panel.appendChild(
      createDivider()
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

    renderEntityIdentity(
      panel,
      entity
    );

    const components =
      entity.components ?? {};

    Object
      .values(components)
      .forEach(component => {

        renderComponentSection(
          panel,
          entity,
          component,
          editor
        );
      });
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