import { createInlineField } from './fields/createInlineField';

export function createFieldRow(
  label,
  value,
  onChange,
  options = {}
) {

  return createInlineField(
    label,
    value,
    onChange,
    options
  );
}