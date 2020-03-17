import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import './button.scss';

import Button from '../../../src/ui/Molecules/Button';

import '../../../src/ui/Atoms/index.scss';

export default {
  component: Button,
  title: '🧬Molecules|Button',
  decorators: [withA11y, withKnobs],
};

export const allButtons = () => (
  <>
    <Button className="btn" kind="primary_outline" onClick={action('clicked')} label="En savoir plus" />
    <Button
      className="btn"
      kind="secondary_outline"
      onClick={action('clicked')}
      label="Secondary"
    />
    <Button className="btn" kind="tertiary_outline" onClick={action('clicked')} label="Tertiary" />
    <Button
      className="btn"
      kind="quaternary_outline"
      onClick={action('clicked')}
      label="Quaternary"
    />
    <Button className="btn" kind="primary" onClick={action('clicked')} label="Primary" />
    <Button className="btn" kind="secondary" onClick={action('clicked')} label="Secondary" />
    <Button className="btn" kind="tertiary" onClick={action('clicked')} label="Tertiary" />
    <Button className="btn" kind="quaternary" onClick={action('clicked')} label="Quaternary" />
    <Button
      className="btn"
      kind="link"
      href="https://octo.com"
      onClick={action('clicked')}
      label="Link"
    />
  </>
);

export const primary = () => (
  <>
    <Button
      className="btn"
      kind="primary_outline"
      onClick={action('clicked')}
      label="Primary Outline"
    />
    <Button
      className="btn"
      kind="primary_outline"
      onClick={action('clicked')}
      label="Primary Outline"
      disabled
    />
    <Button className="btn" kind="primary" onClick={action('clicked')} label="Primary" />
    <Button className="btn" kind="primary" onClick={action('clicked')} label="Primary" disabled />
  </>
);

export const secondary = () => (
  <>
    <Button
      className="btn"
      kind="secondary_outline"
      onClick={action('clicked')}
      label="Secondary Outline"
    />
    <Button
      className="btn"
      kind="secondary_outline"
      onClick={action('clicked')}
      label="Secondary Outline"
      disabled
    />
    <Button className="btn" kind="secondary" onClick={action('clicked')} label="Secondary" />
    <Button
      className="btn"
      kind="secondary"
      onClick={action('clicked')}
      label="Secondary"
      disabled
    />
  </>
);

export const tertiary = () => (
  <>
    <Button
      className="btn"
      kind="tertiary_outline"
      onClick={action('clicked')}
      label="Tertiary Outline"
    />
    <Button
      className="btn"
      kind="tertiary_outline"
      onClick={action('clicked')}
      label="Tertiary Outline"
      disabled
    />
    <Button className="btn" kind="tertiary" onClick={action('clicked')} label="Tertiary" />
    <Button className="btn" kind="tertiary" onClick={action('clicked')} label="Tertiary" disabled />
  </>
);

export const quaternary = () => (
  <>
    <Button
      className="btn"
      kind="quaternary_outline"
      onClick={action('clicked')}
      label="Quaternary Outline"
    />
    <Button
      className="btn"
      kind="quaternary_outline"
      onClick={action('clicked')}
      label="Quaternary Outline"
      disabled
    />
    <Button className="btn" kind="quaternary" onClick={action('clicked')} label="Quaternary" />
    <Button
      className="btn"
      kind="quaternary"
      onClick={action('clicked')}
      label="Quaternary"
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
