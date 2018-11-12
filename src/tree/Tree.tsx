import * as React from 'react';
import { Tree } from 'ntt-view';
import useTree from './useTree';

//
export default ({ ...props }: Tree) => {
    const zoom = useTree(props);

    return (
        <div {...zoom} />
    );
};
