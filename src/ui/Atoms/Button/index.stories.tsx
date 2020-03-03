import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

import Button from '.';

export default {
  component: Button,
  title: 'Atoms|Button',
  decorators: [withA11y],
};

export const primary = () => <Button kind="primary" onClick={action('clicked')} label="Primary" />;

export const secondary = () => (
  <Button kind="secondary" onClick={action('clicked')} label="Secondary" />
);

export const link = () => (
  <Button kind="link" href="https://octo.com" onClick={action('clicked')} label="Link" />
);
