import { createFieldRow } from '../../../core/createFieldRow';
import { createVectorFieldRow } from '../../../core/fields/createVectorFieldRow';

function isVectorLike(value) {

  return (
    value &&
    typeof value === 'object' &&
    'x' in value &&
    'y' in value
  );
}

function formatNumber(value) {

  if (typeof value !== 'number')
    return value;

  return Number(
    value.toFixed(2)
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
      createVectorFieldRow(
        key,
        {
          x: formatNumber(value.x),
          y: formatNumber(value.y),
        }
      )
    );

    return;
  }

  panel.appendChild(
    createFieldRow(
      key,
      formatNumber(value)
    )
  );
}