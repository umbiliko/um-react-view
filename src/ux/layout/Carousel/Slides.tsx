import * as React from 'react';

export interface SlidesProps extends React.HTMLAttributes<HTMLUListElement> {

}

export default function Slides({
                                   children
                               }: SlidesProps) {
    return (
        <ul>{children}</ul>
    );
}