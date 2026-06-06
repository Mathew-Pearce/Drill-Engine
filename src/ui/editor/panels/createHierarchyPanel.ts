import { createPanel } from '../../core/createPanel';
import { createTitle } from '../../core/createTitle';

export function createHierarchyPanel(
  runtime,
  editor
) {

  const panel =
    createPanel();

  panel.style.width =
    '200px';

  panel.style.flexShrink =
    '0';

  function render(state) {

    panel.innerHTML = '';

    panel.appendChild(
      createTitle('Hierarchy')
    );

    state.entities.forEach(entity => {

      const item =
        document.createElement('div');

      item.textContent =
        `${entity.type}: ${entity.id}`;

      item.style.cursor =
        'pointer';

      item.onclick = () => {

        editor.selectEntity(
          entity.id
        );
      };

      panel.appendChild(
        item
      );
    });
  }

  runtime.subscribe(
    render
  );

  return panel;
}