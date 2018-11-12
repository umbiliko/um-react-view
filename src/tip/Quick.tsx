import * as React from 'react';
import { Tip } from 'ntt-view';
import useTip from './useTip';

//
export default ({ ...props }: Tip) => {
    const tip = useTip(props);

    return (
        <div {...tip} />
    );
};
