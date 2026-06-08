import { createReadOnlyField } from './createReadOnlyField';
import { createNumberField } from './createNumberField';

export function createInlineField(
  label,
  value,
  onChange
) {

  const row =
    document.createElement('div');

  row.style.display =
    'flex';

  row.style.alignItems =
    'center';

  row.style.gap =
    '8px';

  row.style.marginBottom =
    '4px';

  const labelElement =
    document.createElement('span');

  labelElement.textContent =
    `${label}:`;

  labelElement.style.width =
    '100px';

  labelElement.style.flexShrink =
    '0';

    const field =
    typeof value === 'number'
      ? createNumberField(
          value,
          onChange
        )
      : createReadOnlyField(
          value
        );

  row.appendChild(labelElement);
  row.appendChild(field);

  return row;
}