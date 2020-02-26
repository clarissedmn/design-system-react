import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

import Button from './index';


export default {
    component: Button,
    title: 'Atoms',
    decorators: [withA11y],
  };

export const button = () => <button className="primary" onClick={action('clicked')}>Hello Button</button>;
