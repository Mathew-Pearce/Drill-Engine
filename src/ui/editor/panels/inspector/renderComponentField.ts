import { createFieldRow } from '../../../core/createFieldRow';

export function renderComponentField(
  panel,
  key,
  value
) {

  if (
    key === 'type' ||
    key === 'label' ||
    key === 'visible'
  ) return;

  if (
    value === undefined ||
    value === null
  ) return;

  panel.appendChild(
    createFieldRow(
      key,
      value
    )
  );
}