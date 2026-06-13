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

  panel.style.background =
    '#080808';

  function render(state) {

    panel.innerHTML = '';

    const title = panel.appendChild(
      createTitle('World')
    );

    title.style.background =
      '#1f1f1f';

    title.style.color =
      '#d0d0d0';

    title.style.padding =
      '8px';

    title.style.borderBottom =
      '1px solid #444';

    title.style.marginTop =
      '0'

    const groups = {};

    state.entities.forEach((entity, index) => {

      if (!groups[entity.type]) {
        groups[entity.type] = [];
      }


      groups[entity.type].push(entity);
    });

    Object
      .keys(groups)
      .forEach((type, groupIndex) => {

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

        groupHeader.style.padding =
          '6px 8px';
        
        groupHeader.style.fontWeight =
          'bold';
        
        groupHeader.style.color =
          '#d0d0d0';
        
        groupHeader.style.background =
          '#161616';

        groupHeader.style.marginTop =
          '1px';

          if (groupIndex > 0) {
            groupHeader.style.borderTop =
              '1px solid #333';
          }

        groupHeader.onpointerdown = () => {
          editor.lockRegion('hierarchy');
        };

        groupHeader.onclick = () => {
          editor.toggleGroup(type);
          editor.unlockRegion('hierarchy');
        };

        panel.appendChild(
          groupHeader
        );

        if (isCollapsed)
          return;

        entities.forEach((entity, index) => {

          const item =
            document.createElement('div');

          item.textContent =
            `  ${entity.id}`;

          item.style.cursor =
            'pointer';

            item.style.padding =
            '6px 8px';
          
          item.style.paddingLeft =
            '20px';
          
          item.style.color =
            '#d0d0d0';

            if (index < entities.length - 1) {
              item.style.borderBottom =
                '1px dotted rgba(76,255,76,0.12)';
            }

            item.style.background =
            index % 2 === 0
              ? '#080808'
              : '#0d0d0d';

              if (editor.getSelectedEntityId() === entity.id) {
                item.style.background =
                  'rgba(76,255,76,0.08)';
              }

          item.onpointerdown = () => {
            editor.lockRegion('hierarchy');
          };

          item.onclick = () => {
            editor.selectEntity(entity.id);
            editor.unlockRegion('hierarchy');
          };

          if (
            editor.getSelectedEntityId() === entity.id
          ) {
          
            item.style.color =
              '#4cff4c';
          
            item.style.fontWeight =
              'bold';
          
            item.style.boxShadow =
              'inset 3px 0 0 rgba(76,255,76,0.5)';
          }

          panel.appendChild(
            item
          );
        });
      });
  }

  runtime.subscribe(state => {

    if (
      editor.isRegionLocked(
        'hierarchy'
      )
    ) return;

    render(state);
  });

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