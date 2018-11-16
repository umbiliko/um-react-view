import * as React from 'react';
import { HTMLAttributes, useImperativeMethods } from 'react';
import { Suspense } from 'react';
import { Spinner } from 'src/spinner';

export default ({ children }: HTMLAttributes<Element>) => {
    return (
        <Suspense fallback={Spinner}>
            {children}
        </Suspense>
    );
};

