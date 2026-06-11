import { createFieldRow } from '../../../core/createFieldRow';
import { createVectorFieldRow } from '../../../core/fields/createVectorFieldRow';
import { updateComponentField } from '../../actions/updateComponentField';

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
  entity,
  component,
  key,
  value,
  runtime,
  editor,
) {

  if (
    key === 'type' ||
    key === 'label' ||
    key === 'visible' ||
    key === 'options'
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
          updateComponentField({
            runtime,
            editor,
            entityId: entity.id,
            componentType: component.type,
            path: [key, axis],
            value: newValue,
          });
        },
        {
          onFocus: () => editor.lockRegion('inspector'),
          onBlur: () => editor.unlockRegion('inspector'),
        }
      )
    );
  
    return;
  }

  const optionsList =
  component.options?.[key];
  

  panel.appendChild(
    createFieldRow(
      key,
      formatNumber(value),
      newValue => {

        updateComponentField({
          runtime,
          editor,
          entityId: entity.id,
          componentType: component.type,
          path: [key],
          value: newValue,
        });
      
        if (key === 'showContactMatrix') {
      
          if (newValue === true) {
            editor.openContactMatrix();
          }
      
          else {
            editor.closeContactMatrix();
          }
        }
      },
      {
        optionsList,
  
        onFocus: () => editor.lockRegion('inspector'),
        onBlur: () => editor.unlockRegion('inspector'),
      }
    )
  );
}