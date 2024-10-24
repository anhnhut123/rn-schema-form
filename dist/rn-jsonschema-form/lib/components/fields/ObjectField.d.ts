import { CommonProps } from "schema-form-core";
export { ObjectField };
declare function ObjectField({
  name,
  uiSchema,
  required,
  readonly,
  disabled,
  methods,
  registry,
  idSchema,
  idPrefix,
  idSeparator,
  ...rest
}: CommonProps): JSX.Element;
