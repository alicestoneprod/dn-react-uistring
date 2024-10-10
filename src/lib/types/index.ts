export enum Colors {
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

export interface ColorI {
  name: Colors
  color: string
}

export interface InputParamI {
  index: number
  value: string | number
}

export interface SliceInfo {
  name: string
  sliceIndex: number
}

export interface UistringRecordI {
  id: string
  content: string
}
