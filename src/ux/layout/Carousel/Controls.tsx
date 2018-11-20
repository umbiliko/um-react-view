import * as React from 'react';

export interface ControlsProps extends React.HTMLAttributes<HTMLDivElement> {

}

export default function Controls({
                                   children
                               }: ControlsProps) {
    return (
        <ul>{children}</ul>
    );
}