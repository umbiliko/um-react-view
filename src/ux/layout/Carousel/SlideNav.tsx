import * as React from 'react';

export interface SlideNavProps extends React.HTMLAttributes<HTMLUListElement> {
}

export default function SlideNav({
                                         id,
                                         image,
                                         isCurrent,
                                         takenFocus,
                                         title,
                                         children
                                     }: SlideNavProps) {
    return (
        <ul
            aria-labelledby={id}
            aria-hidden={!isCurrent}
            className="slide"
            style={{ backgroundImage: `url(${image})` }}
            tabIndex={-1}
        >{children}</ul>
    );
}