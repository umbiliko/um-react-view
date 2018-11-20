import * as React from 'react';

export interface SlideNavItemProps extends React.HTMLAttributes<HTMLLIElement> {
    isCurrent: boolean;
    takeFocus: boolean;
    title: string;
}

const style = (isCurrent: boolean) => ({
    color: '#fff', opacity: isCurrent ? 1 : 0.5
});

export default function SlideNavItem({
                                   isCurrent,
                                   takeFocus,
                                   title,
                                   ...props
                               }: SlideNavItemProps) {
    return (
        <li
            className="slide"
            tabIndex={-1}
            style={style(isCurrent)}
            {...props}
        />
    );
}