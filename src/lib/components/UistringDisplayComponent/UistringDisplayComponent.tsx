import { FC, HTMLAttributes } from "react"
import parse from "html-react-parser"
import { processUistringContent } from "../../main.ts"
import { InputParamI } from "../../types"

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
    <div className={className} {...restProps}>
      {parse(htmlString)}
    </div>
  )
}

export default UistringDisplayComponent
