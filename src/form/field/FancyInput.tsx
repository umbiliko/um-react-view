import * as React from 'react';
import { forwardRef, useImperativeMethods, useRef } from 'react';

function FancyInput(props: any, ref: any) {

    const inputRef = useRef(null);

    // useImperativeMethods customizes the instance value that is exposed to parent components when using ref.
    // As always, imperative code using refs should be avoided in most cases.
    useImperativeMethods(ref, () => ({
        focus: () => {
            inputRef!.current!.focus();
        }
    }));

    return <input ref={inputRef} />;
}

// useImperativeMethods should be used with forwardRef
export default forwardRef(FancyInput);
