import { Colors } from "../utils/processUistringContent/processUistringContent"

interface ColorI {
  name: Colors
  color: string
}

interface InputParamI {
  index: number
  value: string | number
}

interface SliceInfo {
  name: string
  sliceIndex: number
}

interface UistringRecordI {
  mid: string
  content: string
}

export type { ColorI, InputParamI, SliceInfo, UistringRecordI }
