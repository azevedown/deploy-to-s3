import React, { Component } from 'react';
import { Button } from './button-outline.atom.style';
import { ButtonProps } from '../../../models';

export class ButtonOutline extends Component<ButtonProps> {
    render() {
        return (
            <Button variant="link" {...this.props}>{this.props.children}</Button>
        );
    };
};
