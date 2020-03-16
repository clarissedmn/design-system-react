import React from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';

interface ParagraphProps {
  /** Set content importance. */
  level: "M" | "L" | "XL";
  /** Choose an icon */
  children: any;
  className?: string;
}

export default function Paragraph({ level, className, children }: ParagraphProps) {
  return React.createElement(
    'p',
    { className: classNames(className, styles[`${level}_paragraph`]) },
    children,
  );
}
