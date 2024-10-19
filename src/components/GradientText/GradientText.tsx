import { FC, ReactNode } from "react"
import clsx from "clsx"
import s from "./GradientText.module.scss"

interface GradientTextI {
  className?: string
  children?: ReactNode
}
export const GradientText: FC<GradientTextI> = ({ className, children }) => {
  return <h2 className={clsx(s.gradientText, className)}>{children}</h2>
}
