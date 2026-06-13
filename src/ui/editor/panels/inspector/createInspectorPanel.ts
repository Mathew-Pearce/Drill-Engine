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
    '320px';

  panel.style.flexShrink =
    '0';

  panel.style.display =
    'flex';

  panel.style.flexDirection =
    'column';

  const componentArea =
    document.createElement('div');

  componentArea.style.overflowY =
    'auto';

  componentArea.style.flex =
    '1';

  componentArea.style.minHeight =
    '0';

    componentArea.onpointerenter = () => {

      editor.lockRegion(
        'inspector'
      );
    };
    
    componentArea.onpointerleave = () => {
    
      editor.unlockRegion(
        'inspector'
      );
    };

  componentArea.onscroll = () => {

    editor.setScrollPosition(
      'inspector.components',
      componentArea.scrollTop

    );
  };

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

    componentArea.innerHTML =
      '';

    panel.appendChild(
      componentArea
    );

    const components =
      entity.components ?? {};

    Object
      .values(components)
      .forEach(component => {

        renderComponentSection(
          componentArea,
          entity,
          component,
          runtime,
          editor
        );
      });
      componentArea.scrollTop =
  editor.getScrollPosition(
    'inspector.components'
  );
  }

  editor.subscribe(
    render
  );

  runtime.subscribe(() => {

    if (
      editor.isRegionLocked(
        'inspector'
      )
    ) return;

    render();
  });

  render();

  return panel;
}