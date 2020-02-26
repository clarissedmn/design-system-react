import React from "react";


export enum ColorType {
  primary = "primary",
  secondary = "secondary",
  link = "link"
}

interface ColorProps {
  label: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  type: ColorType;
}

export default function Button({
  label,
  icon,
  className,
  onClick,
  href,
  type
}: ColorProps) {
  return <div></div>
}
