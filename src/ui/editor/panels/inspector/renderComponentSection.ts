import { createSubTitle } from '../../../core/createSubTitle';
import { createDivider } from '../../../core/createDivider';
import { renderComponentField } from './renderComponentField';

export function renderComponentSection(
  panel,
  entity,
  component,
  runtime,
  editor
) {

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

  header.onpointerdown = () => {
    editor.lockRegion('inspector')
  }

  header.onclick = () => {
    editor.toggleComponent(
      entity.id,
      component.type
    );
    editor.unlockRegion('inspector')
  };

  panel.appendChild(
    header
  );

  if (collapsed)
    return;

  Object
    .entries(component)
    .forEach(([key, value]) => {

      renderComponentField(
        panel,
        entity,
        component,
        key,
        value,
        runtime,
        editor
      );
    });
}