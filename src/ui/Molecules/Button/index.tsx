import React from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  kind:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'quaternary'
    | 'primary_outline'
    | 'secondary_outline'
    | 'tertiary_outline'
    | 'quaternary_outline'
    | 'link';
  label: string;
  /** Choose an icon */
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}

export default function Button({
  kind,
  label,
  icon,
  iconPosition,
  className,
  onClick,
  href,
  disabled,
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
    <button
      className={classNames(className, styles[kind])}
      onClick={onClick}
      disabled={disabled}
      {...htmlProps}
    >
      {iconPosition === 'left' && icon}
      {label}
      {iconPosition === 'right' && icon}
    </button>
  );
}
