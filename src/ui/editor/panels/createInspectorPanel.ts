import { createPanel } from '../../core/createPanel';
import { createTitle } from '../../core/createTitle';
import { createSectionTitle } from '../../core/createSectionTitle';
import { createSubTitle } from '../../core/createSubTitle';
import { createDivider } from '../../core/createDivider';
import { createFieldRow } from '../../core/createFieldRow';

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

    panel.appendChild(
      createSectionTitle(
        entity.type
      )
    );

    panel.appendChild(
      createDivider()
    );

    panel.appendChild(
      createFieldRow(
        'id',
        entity.id
      )
    );

    panel.appendChild(
      createFieldRow(
        'type',
        entity.type
      )
    );

    const components =
      entity.components ?? {};

    Object
      .values(components)
      .forEach(component => {

        if (component.visible !== true)
          return;

        panel.appendChild(
          createDivider()
        );

        const collapsed =
          editor.isComponentCollapsed(
            entity.id,
            component.type
          );

        const header =
          createSubTitle(
            `${collapsed ? '▶' : '▼'} ${component.type} Component`
          );

        header.style.cursor =
          'pointer';

        header.onclick = () => {
          editor.toggleComponent(
            entity.id,
            component.type
          );
        };

        panel.appendChild(
          header
        );

        if (collapsed)
          return;

        Object
          .entries(component)
          .forEach(([key, value]) => {

            if (
              key === 'type' ||
              key === 'label' ||
              key === 'visible'
            ) return;

            if (
              value === undefined ||
              value === null
            ) return;

            panel.appendChild(
              createFieldRow(
                key,
                value
              )
            );
          });
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