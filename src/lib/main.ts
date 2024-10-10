import "./index.css"
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

export interface InputParamI {
  index: number
  value: string | number
}

interface SliceInfo {
  name: string
  sliceIndex: number
}

interface UistringRecordI {
  id: string
  content: string
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
  const replacedStr = str.replaceAll("\\n", "<br />")

  const sliceInfos: (SliceInfo | null)[] = replacedStr
    .split("")
    .map((char: string, index: number) =>
      char === "#" && isIncluded(colors, replacedStr[index + 1]) ? { name: replacedStr[index + 1], sliceIndex: index } : null,
    )
    .filter(Boolean)

  let result = ""
  let lastSliceIndex = 0

  // Processing colors

  sliceInfos.forEach((el, index: number) => {
    const nextSliceIndex = sliceInfos[index + 1]?.sliceIndex || replacedStr.length
    const slicedStr = replacedStr.slice(lastSliceIndex, nextSliceIndex)
    if (el) {
      result += slicedStr.replace(`#${el.name}`, `<span className='format-color-${el.name}'>`) + "</span>"
    }

    lastSliceIndex = nextSliceIndex
  })

  // Processing input params (used from .DNT)

  if (Array.isArray(inputParams)) {
    inputParams.forEach((el) => {
      result = result.replace(`{${el.index}}`, el.value.toString())
    })
  }

  // Processing direct value placement

  if (Array.isArray(directValues)) {
    directValues.forEach((el) => {
      result = result.replace(`%d`, el.toString())
    })
  }

  return result
}

const extractUistringData = (data: string): UistringRecordI[] => {
  const regExp = /<message\s+mid="(\d+)"><!\[CDATA\[(.*?)\]\]><\/message>/g
  const allData: UistringRecordI[] = []

  const splittedData = data.split("\n")

  splittedData.forEach((el) => {
    const matches = el.matchAll(regExp)
    for (const match of matches) {
      const id = match[1]
      const content = match[2]
      allData.push({ id, content })
    }
  })

  return allData
}

export { processUistringContent, extractUistringData }
