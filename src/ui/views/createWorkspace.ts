import { createPanel } from '../core/createPanel';
import { createTitle } from '../core/createTitle';
import { createViewportWindow } from './createViewportWindow';

export function createWorkspace(runtime) {

  const frame = createPanel();

  frame.style.display = 'flex';
  frame.style.flexDirection = 'row';
  frame.style.width = '100%';
  frame.style.height = '100%';
  frame.style.overflow = 'hidden';

  const hierarchy = createPanel();

  hierarchy.style.width = '200px';
  hierarchy.style.flexShrink = '0';

  hierarchy.appendChild(
    createTitle('Hierarchy')
  );

  const viewportWindow =
    createViewportWindow(runtime);

  viewportWindow.frame.style.flexShrink =
    '0';

  const inspector = createPanel();

  inspector.style.width = '240px';
  inspector.style.flexShrink = '0';

  inspector.appendChild(
    createTitle('Inspector')
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
  };
}
