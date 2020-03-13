import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import Button from '../../../src/ui/Molecules/Button';

import '../../../src/ui/Atoms/index.scss'


export default {
  component: Button,
  title: '🧬Molecules|Button',
  decorators: [withA11y, withKnobs],
};

export const allButtons = () => (
  <>
    <Button kind="primary" onClick={action('clicked')} label="Primary" />
    <Button kind="secondary" onClick={action('clicked')} label="Secondary" />
    <Button kind="tertiary" onClick={action('clicked')} label="Tertiary" />
    <Button kind="quaternary" onClick={action('clicked')} label="Quaternary" />
    <Button kind="primary_outline" onClick={action('clicked')} label="Primary" />
    <Button kind="secondary_outline" onClick={action('clicked')} label="Secondary" />
    <Button kind="tertiary_outline" onClick={action('clicked')} label="Tertiary" />
    <Button kind="quaternary_outline" onClick={action('clicked')} label="Quaternary" />
    <Button kind="link" href="https://octo.com" onClick={action('clicked')} label="Link" />
  </>
);

export const primary = () => (
  <>
    <Button kind="primary" onClick={action('clicked')} label="Primary" />
    <Button kind="primary" onClick={action('clicked')} label="Primary" disabled />
    <Button kind="primary_outline" onClick={action('clicked')} label="Primary Outline" />
    <Button kind="primary_outline" onClick={action('clicked')} label="Primary Outline" disabled />
  </>
);

export const secondary = () => (
  <>
    <Button kind="secondary" onClick={action('clicked')} label="Secondary" />
    <Button kind="secondary" onClick={action('clicked')} label="Secondary" disabled />
    <Button kind="secondary_outline" onClick={action('clicked')} label="Secondary Outline" />
    <Button
      kind="secondary_outline"
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
    <Button kind="tertiary_outline" onClick={action('clicked')} label="Tertiary Outline" />
    <Button kind="tertiary_outline" onClick={action('clicked')} label="Tertiary Outline" disabled />
  </>
);

export const quaternary = () => (
  <>
    <Button kind="quaternary" onClick={action('clicked')} label="Quaternary" />
    <Button kind="quaternary" onClick={action('clicked')} label="Quaternary" disabled />
    <Button kind="quaternary_outline" onClick={action('clicked')} label="Quaternary Outline" />
    <Button
      kind="quaternary_outline"
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
