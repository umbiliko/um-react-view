import * as React from 'react';
import { View } from 'ntt-view';
import useView from './useView';

//
export default ({ ...props }: View) => {

    const view = useView(props);

    return (
        <div {...view} />
    );
};
