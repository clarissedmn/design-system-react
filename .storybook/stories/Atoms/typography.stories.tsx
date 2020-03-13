import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import '../../../src/ui/Atoms/index.scss'


export default {
  title: '⚛️Atoms|Typography',
  decorators: [withA11y],
};

export const headings = () => (
  <>
    <h1>h1 heading</h1>
    <h2>h2 heading</h2>
    <h3>h3 heading</h3>
    <h4>h4 heading</h4>
    <h5>h5 heading</h5>
    <h6>h6 heading</h6>
  </>
);
