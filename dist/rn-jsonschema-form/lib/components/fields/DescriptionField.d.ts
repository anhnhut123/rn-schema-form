import React from 'react';
export { DescriptionField };
type DescriptionFieldProps = {
    id: string;
    description?: string | React.ReactElement;
};
declare function DescriptionField({ id, description }: DescriptionFieldProps): JSX.Element | null;
