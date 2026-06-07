function formatValue(value) {

  if (
    value &&
    typeof value === 'object' &&
    'x' in value &&
    'y' in value
  ) {
    return `x: ${value.x}, y: ${value.y}`;
  }

  return String(value);
}

export function createFieldRow(
  label,
  value
) {

  const row =
    document.createElement('div');

  row.textContent =
    `${label}: [${formatValue(value)}]`;

  return row;
}