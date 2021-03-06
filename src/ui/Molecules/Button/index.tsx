import React from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Set the status of button */
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
  /** Choose an icon */
  label: string;
  /** Set the icon component of button */
  icon?: React.ReactNode;
  /** Set the icon position of button */
  iconPosition?: 'left' | 'right';
  /** Set the handler to handle click event */
  onClick?: () => void;
  /** Redirect url of link button */
  href?: string;
  /** Disabled state of button */
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
  disabled = false,
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
