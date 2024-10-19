import { FC, HTMLAttributes } from "react"
import parse from "html-react-parser"
import { InputParamI } from "../../types"
import { processUistringContent } from "../../index.ts"
import clsx from 'clsx';
import s from './UistringDisplayComponent.module.scss'

interface UistringDisplayComponentI extends HTMLAttributes<HTMLDivElement> {
  className?: string
  value: string
  inputParams?: InputParamI[]
  directValues?: (string | number)[]
}

const UistringDisplayComponent: FC<UistringDisplayComponentI> = (props) => {
  const { className, value, inputParams, directValues, ...restProps } = props
  const htmlString = processUistringContent(value, inputParams, directValues)

  return (
    <div className={clsx(className, s.uistringDisplayCnt)} {...restProps}>
      {parse(htmlString)}
    </div>
  )
}

export default UistringDisplayComponent
