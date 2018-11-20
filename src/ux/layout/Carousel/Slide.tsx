import * as React from 'react';
import { useEffect, useImperativeMethods, useRef } from 'react';

export interface Slide {
    content: any;
    image: string;
    title: string;
}

export interface SlideProps extends React.HTMLAttributes<HTMLLIElement> {
    id: string;
    image: string;
    isCurrent: boolean;
    takeFocus: boolean;
    title: string;
}

export default function Slide({
    id,
    image,
    isCurrent,
    takeFocus,
    title,
    children
}: SlideProps) {
    const ref = useRef<React.AnchorHTMLAttributes<HTMLAnchorElement>>(null);
    useEffect(
        () => {

            if (isCurrent && takeFocus) {
                // useImperativeMethods customizes the instance value that is exposed to parent components when using ref.
                // As always, imperative code using refs should be avoided in most cases.
                /*useImperativeMethods(ref, () => ({
                    focus: () => {
                        inputRef!.current!.focus();
                    }
                }));*/
                ref!.current!.focus!();
            }
        },
        [isCurrent, takeFocus]
    );

    return (
        <li
            aria-labelledby={id}
            aria-hidden={!isCurrent}
            className="slide"
            ref={ref}
            style={{ backgroundImage: `url(${image})` }}
            tabIndex={-1}
        >
            <div className="slide-content">
                <h2 id={id}>{title}</h2>
                {children}
            </div>
        </li>
    );
}
