import { createPanel } from '../../../core/createPanel';
import { createTitle } from '../../../core/createTitle';
import { contactLayers } from '../../../../game/components/collider/contactLayers';
import { contactMatrix } from '../../../../game/components/collider/contactMatrix';

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
    '80px';

  window.style.width =
    '420px';

  window.style.zIndex =
    '100';

  const header =
    document.createElement('div');

  header.style.display =
    'flex';

  header.style.justifyContent =
    'space-between';

  header.appendChild(
    createTitle('Contact Matrix')
  );

  const close =
    document.createElement('button');

  close.textContent =
    '×';

  close.onclick = () => {
    onClose?.();
  };

  header.appendChild(close);

  window.appendChild(header);

  const table =
    document.createElement('div');

  table.style.display =
    'grid';

  table.style.gridTemplateColumns =
    `80px repeat(${contactLayers.length}, 32px)`;

  table.style.gap =
    '4px';

  table.appendChild(
    document.createElement('div')
  );

  contactLayers.forEach(layer => {

    const header =
      document.createElement('div');

    header.textContent =
      layer;

    header.style.fontSize =
      '10px';

    table.appendChild(header);
  });

  contactLayers.forEach(sourceLayer => {

    const rowLabel =
      document.createElement('div');

    rowLabel.textContent =
      sourceLayer;

    rowLabel.style.fontSize =
      '10px';

    table.appendChild(rowLabel);

    contactLayers.forEach(targetLayer => {

      const cell =
        document.createElement('button');

      const active =
        contactMatrix[sourceLayer]?.[targetLayer] === true;

      cell.textContent =
        active ? '■' : '□';

      cell.onclick = () => {

        contactMatrix[sourceLayer] ??=
          {};

        contactMatrix[sourceLayer][targetLayer] =
          !active;

        editor.notifyChange();
      };

      table.appendChild(cell);
    });
  });

  window.appendChild(table);

  return window;
}