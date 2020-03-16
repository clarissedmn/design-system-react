import React from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';
import Button from '../Button';
import Title from '../../Atoms/Typography/Title';

import ReactModal from 'react-modal';

interface ModalProps {
  /** Set the title of modal */
  title?: React.ReactNode;
  /** Set the content of modal */
  content?: React.ReactNode;
  /** Disabled state of button */
  isOpen: boolean;
  className?: string;
  button?: React.ReactNode;
}

export default function Modal({ title, button, content, isOpen, className }: ModalProps) {
  return (
    <div>
      <ReactModal
        style={{
          overlay: {
            zIndex: '100',
          },
        }}
        isOpen={isOpen}
        className={classNames(className, styles['modal'])}
      >
        {title}
        <p>{content}</p>
        {button}
      </ReactModal>
    </div>
  );
}
