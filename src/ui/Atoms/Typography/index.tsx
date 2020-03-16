import React from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';

interface TitleProps {
  /** Set content importance. */
  level: 1 | 2 | 3 | 4;
  /** Choose an icon */
  children: any;
  className?: string;
}

export default function Title({ level, className, children }: TitleProps) {
  return React.createElement(
    `h${level}`,
    { className: classNames(className, styles[`h${level}`]) },
    children,
  );
}
