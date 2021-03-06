import React from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';

interface ParagraphProps {
  /** Set content importance : "M" | "L" | "XL" */
  level: "M" | "L" | "XL";
   /** Render content in your `paragraph` component */
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
