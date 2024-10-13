import { ColorI, InputParamI, SliceInfo } from "../../types"

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

const colors: ColorI[] = [
  { name: Colors.d, color: "#ffffff" },
  { name: Colors.y, color: "#e6e309" },
  { name: Colors.s, color: "#73b2f7" },
  { name: Colors.j, color: "#fe9a50" },
  { name: Colors.w, color: "#fefefe" },
  { name: Colors.b, color: "#1e8ffe" },
  { name: Colors.r, color: "#e34027" },
  { name: Colors.v, color: "#ea83ec" },
  { name: Colors.g, color: "#97df1a" },
  { name: Colors.l, color: "#94e118" },
  { name: Colors.a, color: "#7a7a7a" },
  { name: Colors.n, color: "#7b7b7b" },
  { name: Colors.i, color: "#777777" },
  { name: Colors.t, color: "#787878" },
  { name: Colors.h, color: "#989898" },
  { name: Colors.p, color: "#fe8381" },
  { name: Colors.c, color: "#6d4d27" },
  { name: Colors.e, color: "#fefb3a" },
]
const isIncluded = (colors: ColorI[], name: string) => colors.some((el) => el.name === name)

const processUistringContent = (str: string, inputParams?: InputParamI[], directValues?: (string | number)[]): string => {
  let replacedStr = str.replace(/ {2,}/g, (match) => "&nbsp;".repeat(match.length))

  replacedStr = replacedStr.replaceAll("\\n", "<br />").replaceAll("\n", "<br />")

  const replaceParams = (result: string): string => {
    // Processing inputParams
    if (Array.isArray(inputParams) && inputParams.length) {
      inputParams.forEach((el) => {
        result = result.replace(`{${el.index}}`, el.value.toString())
      })
    }

    // Processing directValues
    if (Array.isArray(directValues) && directValues.length) {
      directValues.forEach((el) => {
        result = result.replace(`%d`, el.toString())
      })
    }

    return result
  }

  const sliceInfos: (SliceInfo | null)[] = replacedStr
    .split("")
    .map((char: string, index: number) =>
      char === "#" && isIncluded(colors, replacedStr[index + 1]) ? { name: replacedStr[index + 1], sliceIndex: index } : null,
    )
    .filter(Boolean)

  let result = ""
  let lastSliceIndex = 0

  if (sliceInfos.length === 0) {
    result = `<span class='format-color-w'>${replacedStr}</span>`
    return replaceParams(result)
  }

  // Processing colors
  sliceInfos.forEach((el, index: number) => {
    const nextSliceIndex = sliceInfos[index + 1]?.sliceIndex || replacedStr.length

    if (el?.sliceIndex && lastSliceIndex < el.sliceIndex) {
      result += `<span class='format-color-w'>${replacedStr.slice(lastSliceIndex, el.sliceIndex)}</span>`
    }

    if (el) {
      result += `<span class='format-color-${el.name}'>${replacedStr.slice(el.sliceIndex + 2, nextSliceIndex)}</span>`
    }

    lastSliceIndex = nextSliceIndex
  })

  if (lastSliceIndex < replacedStr.length) {
    result += `<span class='format-color-w'>${replacedStr.slice(lastSliceIndex)}</span>`
  }

  return replaceParams(result)
}

export default processUistringContent
