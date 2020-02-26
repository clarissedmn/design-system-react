import React from 'react';
import styles from "./index.module.scss";

export enum ButtonType {
  primary = "primary",
  secondary = "secondary",
  link = "link"
}

interface ButtonProps {
  label: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  type: ButtonType;
}

export default function Button({
  label,
  icon,
  className,
  onClick,
  href,
  type
}: ButtonProps) {
  return <button className={styles[type]}>{label}</button>;
}
