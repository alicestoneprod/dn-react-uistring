import { UistringRecordI } from "../../types"

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

export default extractUistringData
