import { createPanel } from '../core/createPanel';
import { createViewportWindow } from './createViewportWindow';
import { createHierarchyPanel } from '../editor/panels/createHierarchyPanel';
import { createInspectorPanel } from '../editor/panels/createInspectorPanel';

export function createWorkspace(
  runtime,
  editor
) {

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

  return {
    frame,
    hierarchy,
    viewportWindow,
    inspector,

    viewport:
      viewportWindow.viewport,
  };
}
