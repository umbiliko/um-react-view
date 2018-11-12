import * as React from 'react';
import { Toolbar } from 'ntt-view';
import useToolbar from './useToolbar';

//
export default ({ ...props }: Toolbar) => {
    const toolbar = useToolbar(props);

    return (
        <div {...toolbar} />
    );
};
