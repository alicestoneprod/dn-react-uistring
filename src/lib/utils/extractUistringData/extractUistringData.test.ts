import extractUistringData from "./extractUistringData"
import { UISTRING_MOCK } from "./mock"

describe("Testing main data extract uistring.xml function", () => {
  test("test basic reading functionality", () => {
    expect(extractUistringData(UISTRING_MOCK.INPUT_1)).toHaveLength(9)
    expect(extractUistringData(UISTRING_MOCK.INPUT_1)).toEqual(UISTRING_MOCK.EXPECTED_ARRAY_1)
  })

  test("test reading functionality with big data", () => {
    expect(extractUistringData(UISTRING_MOCK.INPUT_2)).toHaveLength(4218)
    expect(extractUistringData(UISTRING_MOCK.INPUT_2)).toEqual(UISTRING_MOCK.EXPECTED_ARRAY_2)
  })
})
