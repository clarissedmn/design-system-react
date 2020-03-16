import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import Modal from '../../../src/ui/Molecules/Modal';

import '../../../src/ui/Atoms/index.scss';
import Button from '../../../src/ui/Molecules/Button';
import Title from '../../../src/ui/Atoms/Typography/Title';
import Paragraph from '../../../src/ui/Atoms/Typography/Paragraph';

export default {
  component: Modal,
  title: '🧬Molecules|Modal',
  decorators: [withA11y, withKnobs],
};

export function ModalStories() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button kind="primary_outline" label="Open Modal" onClick={() => setIsOpen(true)} />

      <Modal
        title={<Title level={3}>Modal Title</Title>}
        content={<Paragraph level="M">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>}
        isOpen={isOpen}
        button={<Button kind="primary" label="Close" onClick={() => setIsOpen(false)}/>}
      />
    </>
  );
}
