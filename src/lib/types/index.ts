enum Colors {
  d = "d",
  y = "y",
  s = "s",
  j = "j",
  w = "w",
  b = "b",
  r = "r",
  v = "v",
  g = "g",
  l = "l",
  a = "a",
  n = "n",
  i = "i",
  t = "t",
  h = "h",
  p = "p",
  c = "c",
  e = "e",
}

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

export { Colors }
