export function createFieldRow(
    label,
    value
  ) {
  
    const row =
      document.createElement('div');
  
    row.textContent =
      `${label}: [${value}]`;
  
    return row;
  }