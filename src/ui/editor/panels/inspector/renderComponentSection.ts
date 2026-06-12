import { createSubTitle } from '../../../core/createSubTitle';
import { createDivider } from '../../../core/createDivider';
import {formatDisplayName } from '../../../core/formatDisplayName'
import { renderComponentField } from './renderComponentField';
import { createComponentCard } from '../../../core/createComponentCard'

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
    
   const {
    card,
    header,
    body,
  } = createComponentCard(
    `${collapsed ? '▶' : '▼'} ${formatDisplayName(component.type)} Component`,
    !collapsed
  );
  header.style.cursor =
    'pointer';

    header.style.boxShadow =
    collapsed
      ? 'none'
      : '0 0 6px rgba(76, 255, 76, 0.5)';

    header.style.borderLeft =
      collapsed
        ? 'none'
        : '2px solid rgba(76, 255, 76, 0.35)';

      header.style.borderTop =
        collapsed
          ? 'none'
          : '2px solid rgba(76, 255, 76, 0.35)';

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
    card
  );

  if (collapsed)
    return;

  Object
    .entries(component)
    .forEach(([key, value]) => {

      renderComponentField(
        body,
        entity,
        component,
        key,
        value,
        runtime,
        editor
      );
    });
}