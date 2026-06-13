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

  panel.style.position =
    'relative';

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

    const scrollShadow =
    document.createElement('div');

  
  scrollShadow.style.position =
    'absolute';
  
  scrollShadow.style.left =
    '0';
  
  scrollShadow.style.right =
    '0';
  
  scrollShadow.style.top =
    '165px'; // adjust if needed
  
  scrollShadow.style.height =
    '5px';
  
  scrollShadow.style.pointerEvents =
    'none';
  
  scrollShadow.style.zIndex =
    '10';
  
  scrollShadow.style.opacity =
    '0';
  
  scrollShadow.style.transition =
    'opacity 120ms ease';
  
  scrollShadow.style.background =
    'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0))';

  componentArea.style.overflowY =
    'auto';

  componentArea.style.flex =
    '1';

  componentArea.style.minHeight =
    '0';

    componentArea.style.borderBottom =
    '1px solid #444'

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

    scrollShadow.style.opacity =
    componentArea.scrollTop > 0
      ? '1'
      : '0';
  };

  function render() {

    panel.innerHTML = '';

    const title = panel.appendChild(
      createTitle('Inspector')
    );


    title.style.background =
      '#1f1f1f';

    title.style.color =
      '#d0d0d0';

    title.style.padding =
      '8px';

    title.style.marginBottom =
      '0';

    title.style.marginTop =
      '0';

    title.style.borderBottom =
    '1px solid #444'

    const selectedId =
      editor.getSelectedEntityId();

    const state =
      runtime.getState();

    const entity =
      state.entities.find(
        entity => entity.id === selectedId
      );

    if (!entity) {
      const emptyMessage =
      document.createElement('div');
    
    emptyMessage.textContent =
      'No entity selected';
    
    emptyMessage.style.padding =
      '12px 8px';
    
    emptyMessage.style.color =
      '#d0d0d0';
    
    panel.appendChild(
      emptyMessage
    );
      return;
    }

    renderEntityIdentity(
      panel,
      entity
    );

    componentArea.innerHTML =
      '';

      const entityCard =
      panel.lastElementChild;
    
    if (entityCard) {
    
      const rect =
        entityCard.getBoundingClientRect();
    
      const panelRect =
        panel.getBoundingClientRect();
    
      scrollShadow.style.top =
        `${rect.bottom - panelRect.top}px`;
    }

    panel.appendChild(
        scrollShadow
      );

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