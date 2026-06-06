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
    
      const groups = {};
    
      state.entities.forEach(entity => {
    
        if (!groups[entity.type]) {
          groups[entity.type] = [];
        }
    
        groups[entity.type].push(entity);
      });
    
      Object
        .keys(groups)
        .forEach(type => {
    
          const entities =
            groups[type];
    
          const isCollapsed =
            editor.isGroupCollapsed(type);
    
          const groupHeader =
            document.createElement('div');
    
          groupHeader.textContent =
            `${isCollapsed ? '▶' : '▼'} ${type} (${entities.length})`;
    
          groupHeader.style.cursor =
            'pointer';
    
          groupHeader.onclick = () => {
            editor.toggleGroup(type);
          };
    
          panel.appendChild(
            groupHeader
          );
    
          if (isCollapsed) return;
    
          entities.forEach(entity => {
    
            const item =
              document.createElement('div');
    
            item.textContent =
              `  ${entity.id}`;
    
            item.style.cursor =
              'pointer';
    
            item.style.paddingLeft =
              '12px';
    
            item.onclick = () => {
              editor.selectEntity(entity.id);
            };
    
            panel.appendChild(
              item
            );
          });
        });
    }

  runtime.subscribe(
    render
  );

  editor.subscribe(() => {
    render(
      runtime.getState()
    );
  });

  render(
    runtime.getState()
  );
  
  return panel;
}