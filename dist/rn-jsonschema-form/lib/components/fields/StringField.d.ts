import { CommonProps } from "schema-form-core";
export { StringField };
declare function StringField({
  name,
  schema,
  uiSchema,
  required,
  registry,
  methods,
  ...rest
}: CommonProps): JSX.Element;
