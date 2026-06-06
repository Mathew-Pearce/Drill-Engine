import { createPanel } from '../core/createPanel';
import { createTitle } from '../core/createTitle';
import { createViewportWindow } from './createViewportWindow';

export function createWorkspace(runtime, editor) {

  let currentState = null;

  const frame = createPanel();

  frame.style.display = 'flex';
  frame.style.flexDirection = 'row';
  frame.style.width = '100%';
  frame.style.height = '100%';
  frame.style.overflow = 'hidden';

  const hierarchy = createPanel();

  hierarchy.style.width = '200px';
  hierarchy.style.flexShrink = '0';

  const viewportWindow =
  createViewportWindow(runtime, editor);

  viewportWindow.frame.style.flexShrink =
    '0';

  const inspector = createPanel();

  inspector.style.width = '240px';
  inspector.style.flexShrink = '0';

  function renderHierarchy(state) {

    hierarchy.innerHTML = '';

    hierarchy.appendChild(
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
        editor.selectEntity(entity.id);
      };

      hierarchy.appendChild(item);
    });
  }

  function renderInspector() {

    inspector.innerHTML = '';

    inspector.appendChild(
      createTitle('Inspector')
    );

    if (!currentState) {
      inspector.appendChild(
        document.createTextNode('No runtime state')
      );
      return;
    }

    const selectedId =
      editor.getSelectedEntityId();

    const entity =
      currentState.entities.find(
        entity => entity.id === selectedId
      );

    if (!entity) {
      inspector.appendChild(
        document.createTextNode('No entity selected')
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

    inspector.appendChild(
      output
    );
  }

  runtime.subscribe(state => {

    currentState = state;

    renderHierarchy(state);
    renderInspector();
  });

  editor.subscribe(
    renderInspector
  );

  frame.appendChild(hierarchy);
  frame.appendChild(viewportWindow.frame);
  frame.appendChild(inspector);

  return {
    frame,
    hierarchy,
    viewportWindow,
    inspector,

    viewport:
      viewportWindow.viewport,

      editor
  };
}
