import { createFieldRow } from '../../../core/createFieldRow';
import { formatDisplayName } from '../../../core/formatDisplayName';

export function renderEntityIdentity(
  panel,
  entity
) {

  const container =
    document.createElement('div');

  container.style.margin =
    '8px 4px';

  container.style.border =
    '1px solid #222';

  container.style.boxShadow =
    '0 2px 6px rgba(0, 0, 0, 0.25)';

    container.style.marginBottom =
    '8px';

  const header =
    document.createElement('div');

  header.textContent =
    `${formatDisplayName(entity.type)} Entity`;

  header.style.background =
    '#1f1f1f';

  header.style.padding =
    '8px';

  header.style.fontWeight =
    'bold';

  header.style.color =
    'rgba(76,255,76,0.9)';

   header.style.boxShadow =
    'inset 3px 0 0 rgba(76,255,76,0.5)';

  const identity =
    document.createElement('div');

  identity.style.background =
    '#080808';

  identity.style.padding =
    '8px';

  identity.appendChild(
    createFieldRow(
      'Id',
      entity.id
    )
  );

  identity.appendChild(
    createFieldRow(
      'Type',
      entity.type
    )
  );

  container.appendChild(
    header
  );

  container.appendChild(
    identity
  );

  panel.appendChild(
    container
  );
}