import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import Title from '../../../src/ui/Atoms/Typography';
import Paragraph from '../../../src/ui/Atoms/Typography/Paragraph';

import '../../../src/ui/Atoms/index.scss'


export default {
  component: Title, Paragraph,
  title: '⚛️Atoms|✏️Typography',
  decorators: [withA11y, withKnobs],
};


export const title = () => (
  <>
    <Title level={1}>h1 heading</Title>
    <Title level={2}>h2 heading</Title>
    <Title level={3}>h3 heading</Title>
    <Title level={4}>h4 heading</Title>
  </>
);

export const paragraph = () => (
  <>
  <Paragraph level="XL">XL Paragraph</Paragraph>
  <Paragraph level="L">L Paragraph</Paragraph>
  <Paragraph level="M">M Paragraph</Paragraph>
  </>
)
