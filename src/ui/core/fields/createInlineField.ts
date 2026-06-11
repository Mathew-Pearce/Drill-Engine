import { createReadOnlyField } from './createReadOnlyField';
import { createNumberField } from './createNumberField';
import { createBooleanField } from './createBooleanField';
import { createSelectField} from './createSelectField';

export function createInlineField(
  label,
  value,
  onChange,
  options = {},
) {

  const row =
    document.createElement('div');

  row.style.display =
    'flex';

  row.style.alignItems =
    'center';

  row.style.gap =
    '8px';

    row.style.paddingLeft =
  '4px';

  row.style.marginBottom =
    '4px';

  const labelElement =
    document.createElement('span');

  labelElement.textContent =
    `${label}:`;

  labelElement.style.width =
    '140px';

  labelElement.style.flexShrink =
    '0';

    const field =
    options.optionsList
      ? createSelectField(
          value,
          options.optionsList,
          onChange,
          options
        )
      : typeof value === 'number'
        ? createNumberField(
            value,
            onChange,
            options
          )
        : typeof value === 'boolean'
          ? createBooleanField(
              value,
              onChange,
              options
            )
          : createReadOnlyField(
              value
            );

  row.appendChild(labelElement);
  row.appendChild(field);

  return row;
}