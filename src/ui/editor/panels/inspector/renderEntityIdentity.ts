import { createSectionTitle } from '../../../core/createSectionTitle';
import { createDivider } from '../../../core/createDivider';
import { createFieldRow } from '../../../core/createFieldRow';
import { formatDisplayName } from '../../../core/formatDisplayName'

export function renderEntityIdentity(
  panel,
  entity
) {

  const identity =
    document.createElement('div');

  identity.style.background =
    '#080808';

  identity.style.border =
    '1px solid #222';

  identity.style.boxShadow =
    '0 2px 6px rgba(0, 0, 0, 0.25)';

  identity.style.margin =
    '8px 4px';

  identity.style.padding =
    '8px';

  panel.appendChild(
    createSectionTitle(
      formatDisplayName(entity.type)
    )
  );

  panel.appendChild(
    createDivider()
  );

  identity.appendChild(
    createFieldRow(
      'Id',
      entity.id
    )
  );

  identity.appendChild(
    createFieldRow(
      'Type',
      formatDisplayName(entity.type)
    )
  );

  panel.appendChild(
    identity
  );
}