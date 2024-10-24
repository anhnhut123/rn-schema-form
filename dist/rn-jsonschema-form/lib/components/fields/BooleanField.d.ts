import { CommonProps } from "schema-form-core";
export { BooleanField };
declare function BooleanField({
  name,
  schema,
  uiSchema,
  required,
  registry,
  methods,
  ...rest
}: CommonProps): JSX.Element;
