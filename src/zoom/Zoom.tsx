import * as React from 'react';
import { Zoom } from 'ntt-view';
import useZoom from './useZoom';

//
export default ({ ...props }: Zoom) => {
    const zoom = useZoom(props);

    return (
        <div {...zoom} />
    );
};
