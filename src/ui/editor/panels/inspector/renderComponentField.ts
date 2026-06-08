import { createFieldRow } from '../../../core/createFieldRow';

function isVectorLike(value) {

  return (
    value &&
    typeof value === 'object' &&
    'x' in value &&
    'y' in value
  );
}

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

  if (isVectorLike(value)) {

    panel.appendChild(
      createFieldRow(
        key,
        `x: ${value.x}  y: ${value.y}`
      )
    );

    return;
  }

  panel.appendChild(
    createFieldRow(
      key,
      value
    )
  );
}