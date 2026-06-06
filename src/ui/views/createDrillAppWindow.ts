import { createPanel } from '../core/createPanel';
import { createHeaderBar } from './createHeaderBar';
import { createWorkspace } from './createWorkspace';

export function createDrillAppWindow(runtime) {

  const root = createPanel();

  root.style.display = 'flex';
  root.style.flexDirection = 'column';
  root.style.width = '100vw';
  root.style.height = '100vh';

  const header =
    createHeaderBar();

  const workspace =
    createWorkspace(runtime);

  workspace.frame.style.flex =
    '1';

  root.appendChild(header);
  root.appendChild(workspace.frame);

  return {
    root,
    header,
    workspace,

    viewport:
      workspace.viewport,
  };
}