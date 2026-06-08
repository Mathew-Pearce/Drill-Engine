import { createInlineField } from './fields/createInlineField';

export function createFieldRow(
  label,
  value,
  onChange
) {

  return createInlineField(
    label,
    value,
    onChange
  );
}