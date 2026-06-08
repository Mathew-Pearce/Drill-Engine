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
  component,
  key,
  value,
  editor,
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
        },
        (axis, newValue) => {
      
          value[axis] =
            newValue;
      
          editor.notifyChange();
        }
      )
    );
  
    return;
  }

  panel.appendChild(
    createFieldRow(
      key,
      formatNumber(value),
      newValue => {
  
        component[key] =
          newValue;
  
        editor.notifyChange();
      }
    )
  );
}