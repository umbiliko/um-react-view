import * as React from 'react';
import { Slide } from './Slide';

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
    slides: Slide[];
}

export const CarouselContainer = ({
    children
}: CarouselProps) => {
    return (
        <div>{children}</div>
    );
}
