import * as React from 'react';
import { Form } from 'ntt-view';
import useForm from './useForm';

//
export default ({ ...props }: Form) => {

    const form = useForm(props);

    return (
        <div {...form} />
    );
};
