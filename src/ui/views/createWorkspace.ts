import { createPanel } from '../core/createPanel';
import { createViewportWindow } from './createViewportWindow';
import { updateComponentField } from '../editor/actions/updateComponentField';
import { createHierarchyPanel } from '../editor/panels/createHierarchyPanel';
import { createInspectorPanel } from '../editor/panels/inspector/createInspectorPanel';
import { createContactMatrixWindow } from '../editor/tools/contactMatrix/createContactMatrixWindow'


export function createWorkspace(
  runtime,
  editor
) {

  let contactMatrixWindow = null;

  const frame =
    createPanel();

  frame.style.display =
    'flex';

  frame.style.flexDirection =
    'row';

  frame.style.width =
    '100%';

  frame.style.height =
    '100%';

  frame.style.overflow =
    'hidden';

  const hierarchy =
    createHierarchyPanel(
      runtime,
      editor
    );

  const viewportWindow =
    createViewportWindow(
      runtime
    );

  viewportWindow.frame.style.flexShrink =
    '0';

  const inspector =
    createInspectorPanel(
      runtime,
      editor
    );

  frame.appendChild(
    hierarchy
  );

  frame.appendChild(
    viewportWindow.frame
  );

  frame.appendChild(
    inspector
  );

  function renderFloatingTools() {

    if (
      contactMatrixWindow
    ) {
      contactMatrixWindow.remove();
      contactMatrixWindow = null;
    }
  
    if (
      editor.getIsContactMatrixOpen()
    ) {
  
      contactMatrixWindow =
  createContactMatrixWindow(
    editor,
    () => {

      const selectedId =
        editor.getSelectedEntityId();

      if (selectedId) {

        updateComponentField({
          runtime,
          editor,
          entityId: selectedId,
          componentType: 'collider',
          path: ['showContactMatrix'],
          value: false,
        });
      }

      editor.closeContactMatrix();
    }
  );
  
      frame.appendChild(
        contactMatrixWindow
      );
    }
  }

  editor.subscribe(
    renderFloatingTools
  );

  renderFloatingTools();

  return {
    frame,
    hierarchy,
    viewportWindow,
    inspector,

    viewport:
      viewportWindow.viewport,
  };
}
