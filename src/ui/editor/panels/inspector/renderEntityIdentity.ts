import { createSectionTitle } from '../../../core/createSectionTitle';
import { createDivider } from '../../../core/createDivider';
import { createFieldRow } from '../../../core/createFieldRow';

export function renderEntityIdentity(
  panel,
  entity
) {

  panel.appendChild(
    createSectionTitle(
      entity.type
    )
  );

  panel.appendChild(
    createDivider()
  );

  panel.appendChild(
    createFieldRow(
      'id',
      entity.id
    )
  );

  panel.appendChild(
    createFieldRow(
      'type',
      entity.type
    )
  );
}