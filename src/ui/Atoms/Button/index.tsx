import React from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  kind: 'primary' | 'secondary' | 'link';
  label: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  href?: string;
}

export default function Button({
  kind,
  label,
  icon,
  iconPosition,
  className,
  onClick,
  href,
  ...htmlProps
}: ButtonProps) {
  return kind === 'link' ? (
    <a
      className={classNames(className, styles[kind])}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {iconPosition === 'left' && icon}
      {label}
      {iconPosition === 'right' && icon}
    </a>
  ) : (
    <button className={classNames(className, styles[kind])} onClick={onClick} {...htmlProps}>
      {iconPosition === 'left' && icon}
      {label}
      {iconPosition === 'right' && icon}
    </button>
  );
}
