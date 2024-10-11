import { UistringRecordI } from "../../types"

const extractUistringData = (data: string): UistringRecordI[] => {
  const regExp = /<message\s+mid="(\d+)"><!\[CDATA\[(.*?)\]\]><\/message>/g
  const allData: UistringRecordI[] = []

  const splittedData = data.split("\n")

  splittedData.forEach((el) => {
    const matches = el.matchAll(regExp)
    for (const match of matches) {
      const mid = match[1]
      const content = match[2]
      allData.push({ mid, content })
    }
  })

  return allData
}

export default extractUistringData
