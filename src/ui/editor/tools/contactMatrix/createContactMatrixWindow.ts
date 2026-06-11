import { createPanel } from '../../../core/createPanel';
import { contactLayers } from '../../../../game/components/collider/contactLayers';
import { contactMatrix } from '../../../../game/components/collider/contactMatrix';

function formatLayerName(layer) {

  return layer
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, char => char.toUpperCase());
}

export function createContactMatrixWindow(
  editor,
  onClose
) {

  const window =
    createPanel();

  window.style.position =
    'absolute';

  window.style.left =
    '260px';

  window.style.top =
    '100px';

  window.style.width =
    '640px';

  window.style.minHeight =
    '430px';

  window.style.zIndex =
    '100';

  window.style.padding =
    '0';

  window.style.background =
    '#080808';

  const header =
    document.createElement('div');

  header.style.display =
    'flex';

  header.style.justifyContent =
    'space-between';

  header.style.alignItems =
    'center';

  header.style.padding =
    '6px 8px';

  header.style.background =
    '#2b2b2b';

  header.style.borderBottom =
    '1px solid #555';

  const title =
    document.createElement('div');

  title.textContent =
    'Contact Matrix';

  title.style.fontWeight =
    'bold';

  const close =
    document.createElement('button');

  close.textContent =
    '×';

  close.onclick = () => {
    onClose?.();
  };

  header.appendChild(title);
  header.appendChild(close);

  window.appendChild(header);

  const content =
    document.createElement('div');

  content.style.padding =
    '18px';

  window.appendChild(content);

  const table =
    document.createElement('div');

  table.style.display =
    'grid';

  table.style.gridTemplateColumns =
    `120px repeat(${contactLayers.length}, 40px)`;

  table.style.gap =
    '6px';

  table.style.alignItems =
    'center';

  const rowLayers =
    [...contactLayers].reverse();

  rowLayers.forEach(sourceLayer => {

    const rowLabel =
      document.createElement('div');

      rowLabel.textContent =
      formatLayerName(sourceLayer);
    
    rowLabel.style.fontSize =
      '18px';
    
    rowLabel.style.fontWeight =
      'bold';
    
    rowLabel.style.height =
      '34px';          // same as pad height
    
    rowLabel.style.display =
      'flex';
    
    rowLabel.style.alignItems =
      'center';
    
    rowLabel.style.justifyContent =
      'flex-end';
    
    rowLabel.style.paddingRight =
      '12px';
    
    rowLabel.style.borderBottom =
      '1px dotted rgba(76, 255, 76, 0.25)';
    
    rowLabel.style.color =
      '#d0d0d0';

    table.appendChild(rowLabel);

    contactLayers.forEach(targetLayer => {

      const cell =
        document.createElement('button');

      const active =
        contactMatrix[sourceLayer]?.[targetLayer] === true;

      cell.textContent =
        '';

      cell.style.width =
        '34px';

      cell.style.height =
        '34px';

      cell.style.border =
        active
        ? '1px solid #8cff8c'
        : '1px solid #244024';

      cell.style.background =
        active
          ? '#1f8f45'
          : '#102010';

      cell.style.boxShadow =
          active
            ? '0 0 10px #4cff4c'
            : 'inset 0 0 5px #020802';

      cell.style.borderRadius =
        '6px';

      cell.style.cursor =
        'pointer';

        cell.style.transition =
        'box-shadow 100ms ease, transform 100ms ease';

        cell.onmouseenter = () => {

          const active =
            contactMatrix[sourceLayer]?.[targetLayer] === true;
        
          if (active) {
        
            cell.style.boxShadow =
              '0 0 4px #4cff4c';
        
            cell.style.filter =
              'brightness(0.85)';
          }
        
          else {
        
            cell.style.boxShadow =
              '0 0 6px rgba(76,255,76,0.25)';
        
            cell.style.filter =
              'brightness(1.15)';
          }
        };
        
        cell.onmouseleave = () => {
        
          const active =
            contactMatrix[sourceLayer]?.[targetLayer] === true;
        
          cell.style.filter =
            'none';
        
          cell.style.boxShadow =
            active
              ? '0 0 10px #4cff4c'
              : 'inset 0 0 5px #020802';
        };

        cell.onclick = () => {

          cell.style.boxShadow =
            '0 0 16px #8cff8c';
        
          cell.style.transform =
            'scale(0.94)';
        
          setTimeout(() => {
        
            contactMatrix[sourceLayer] ??=
              {};
        
            contactMatrix[sourceLayer][targetLayer] =
              !active;
        
            editor.notifyChange();
        
          }, 100);
        };

      table.appendChild(cell);
    });
  });

  const corner =
  document.createElement('div');

table.appendChild(corner);

contactLayers.forEach(layer => {

  const wrapper =
    document.createElement('div');

  wrapper.style.height =
    '120px';

  wrapper.style.display =
    'flex';

  wrapper.style.alignItems =
    'flex-start';

  wrapper.style.justifyContent =
    'center';

  wrapper.style.position =
    'relative';

  wrapper.style.borderLeft =
    '1px dotted rgba(76, 255, 76, 0.25)';

  const label =
    document.createElement('div');

  label.textContent =
    formatLayerName(layer);

  label.style.fontSize =
    '18px';

  label.style.fontWeight =
    'bold';

  label.style.whiteSpace =
    'nowrap';

  label.style.position =
    'absolute';

  label.style.top =
    '8px';

  label.style.left =
    '50%';

  label.style.transformOrigin =
    'left center';

  label.style.transform =
    'rotate(-90deg) translateX(-100%)';
  label.style.color =
  '#d0d0d0'

  wrapper.appendChild(
    label
  );

  table.appendChild(
    wrapper
  );
});

  content.appendChild(table);

  return window;
}