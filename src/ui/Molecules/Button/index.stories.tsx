import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

import Button from '.';

export default {
  component: Button,
  title: '🧬Molecules|Button',
  decorators: [withA11y],
};

export const allButtons = () => (
  <>
    <Button kind="primary" onClick={action('clicked')} label="Primary" />
    <Button kind="secondary" onClick={action('clicked')} label="Secondary" />
    <Button kind="tertiary" onClick={action('clicked')} label="Tertiary" />
    <Button kind="quaternary" onClick={action('clicked')} label="Quaternary" />
    <Button kind="primaryOutline" onClick={action('clicked')} label="Primary" />
    <Button kind="secondaryOutline" onClick={action('clicked')} label="Secondary" />
    <Button kind="tertiaryOutline" onClick={action('clicked')} label="Tertiary" />
    <Button kind="quaternaryOutline" onClick={action('clicked')} label="Quaternary" />
    <Button kind="link" href="https://octo.com" onClick={action('clicked')} label="Link" />
  </>
);

export const primary = () => (
  <>
    <Button kind="primary" onClick={action('clicked')} label="Primary" />
    <Button kind="primary" onClick={action('clicked')} label="Primary" disabled />
    <Button kind="primaryOutline" onClick={action('clicked')} label="Primary Outline" />
    <Button kind="primaryOutline" onClick={action('clicked')} label="Primary Outline" disabled />
  </>
);

export const secondary = () => (
  <>
    <Button kind="secondary" onClick={action('clicked')} label="Secondary" />
    <Button kind="secondary" onClick={action('clicked')} label="Secondary" disabled />
    <Button kind="secondaryOutline" onClick={action('clicked')} label="Secondary Outline" />
    <Button
      kind="secondaryOutline"
      onClick={action('clicked')}
      label="Secondary Outline"
      disabled
    />
  </>
);

export const tertiary = () => (
  <>
    <Button kind="tertiary" onClick={action('clicked')} label="Tertiary" />
    <Button kind="tertiary" onClick={action('clicked')} label="Tertiary" disabled />
    <Button kind="tertiaryOutline" onClick={action('clicked')} label="Tertiary Outline" />
    <Button kind="tertiaryOutline" onClick={action('clicked')} label="Tertiary Outline" disabled />
  </>
);

export const quaternary = () => (
  <>
    <Button kind="quaternary" onClick={action('clicked')} label="Quaternary" />
    <Button kind="quaternary" onClick={action('clicked')} label="Quaternary" disabled />
    <Button kind="quaternaryOutline" onClick={action('clicked')} label="Quaternary Outline" />
    <Button
      kind="quaternaryOutline"
      onClick={action('clicked')}
      label="Quaternary Outline"
      disabled
    />
  </>
);

export const link = () => (
  <>
    <Button kind="link" href="https://octo.com" onClick={action('clicked')} label="Link" />
    <Button kind="link" href="https://octo.com" onClick={action('clicked')} label="Link" disabled />
  </>
);
