import { ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode
}

export interface ClassNameProps {
  className: string
}

export interface OnClickProps {
  onClick: () => void
}

export interface ImgProps {
  src: string,
  alt: string
}

export interface LinkProps {
  url: string,
  name: string
}