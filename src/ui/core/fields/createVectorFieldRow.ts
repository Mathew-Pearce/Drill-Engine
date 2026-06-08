import { createReadOnlyField } from './createReadOnlyField';

export function createVectorFieldRow(label, value) {

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

  const xLabel =
    document.createElement('span');

  xLabel.textContent =
    'x:';

  const xField =
    createReadOnlyField(value.x);

  const yLabel =
    document.createElement('span');

  yLabel.textContent =
    'y:';

  const yField =
    createReadOnlyField(value.y);

  row.appendChild(labelElement);
  row.appendChild(xLabel);
  row.appendChild(xField);
  row.appendChild(yLabel);
  row.appendChild(yField);

  return row;
}