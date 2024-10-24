import { Methods } from "schema-form-core";
export { SchemaField };
type SchemaFieldProps = {
  name: string;
  schema: any;
  uiSchema?: any;
  methods: Methods;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  registry?: any;
  idSchema?: any;
  idPrefix?: string;
  idSeparator?: any;
};
declare function SchemaField({
  name,
  uiSchema,
  registry,
  methods,
  idPrefix,
  idSeparator,
  ...rest
}: SchemaFieldProps): JSX.Element | null;
