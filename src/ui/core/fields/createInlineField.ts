import { createReadOnlyField } from './createReadOnlyField';

export function createInlineField(label, value) {

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
    createReadOnlyField(value);

  row.appendChild(labelElement);
  row.appendChild(field);

  return row;
}