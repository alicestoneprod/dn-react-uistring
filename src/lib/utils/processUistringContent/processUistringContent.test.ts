import processUistringContent from "./processUistringContent"
import { MOCK } from "./mock"

describe("Content to Html Function", () => {
  test("input content with colors", () => {
    expect(processUistringContent("#rThis is a test#b of colors.")).toBe(
      "<span class='format-color-r'>This is a test</span><span class='format-color-b'> of colors.</span>",
    )
  })

  test("input content start without color and then with colors", () => {
    expect(processUistringContent("Now without color#rAnd now with red color.")).toBe(
      "<span class='format-color-w'>Now without color</span><span class='format-color-r'>And now with red color.</span>",
    )
  })

  test("input 1 skip to next string", () => {
    expect(processUistringContent("With skip to next string.\nOops")).toBe("<span class='format-color-w'>With skip to next string.<br />Oops</span>")
  })

  test("input 3 skips to next string", () => {
    expect(processUistringContent("With 3 skips to next string.\n\n\nOops")).toBe(
      "<span class='format-color-w'>With 3 skips to next string.<br /><br /><br />Oops</span>",
    )
  })

  test("input with params array", () => {
    const inputParams = [
      {
        index: 1,
        value: "man",
      },
    ]

    expect(processUistringContent("Iona is {1}.", inputParams)).toBe("<span class='format-color-w'>Iona is man.</span>")
  })

  test("input with params array but with skip 0 index", () => {
    const inputParams = [
      {
        index: 1,
        value: "man",
      },
      {
        index: 4,
        value: "test",
      },
    ]

    expect(processUistringContent("Iona is {1}. {0} {4}", inputParams)).toBe("<span class='format-color-w'>Iona is man. {0} test</span>")
  })

  test("input with direct values array", () => {
    const directValues = ["man", "man"]

    expect(processUistringContent("Iona is %d %d.", [], directValues)).toBe("<span class='format-color-w'>Iona is man man.</span>")
  })

  test("input too big content with direct values, input params, colors, enter as a new stringing V1", () => {
    expect(processUistringContent(MOCK.BIG_CONTENT_1.INPUT, MOCK.BIG_CONTENT_1.INPUT_PARAMS, MOCK.BIG_CONTENT_1.DIRECT_VALUES)).toBe(
      MOCK.BIG_CONTENT_1.EXPECTED,
    )
  })

  test("input too big content with direct values, input params, colors, enter as a new stringing V-2", () => {
    expect(processUistringContent(MOCK.BIG_CONTENT_2.INPUT, MOCK.BIG_CONTENT_2.INPUT_PARAMS, MOCK.BIG_CONTENT_2.DIRECT_VALUES)).toBe(
      MOCK.BIG_CONTENT_2.EXPECTED,
    )
  })

  test("input too big content with direct values, input params, colors, enter as a new stringing V-3", () => {
    expect(processUistringContent(MOCK.BIG_CONTENT_3.INPUT, MOCK.BIG_CONTENT_3.INPUT_PARAMS, MOCK.BIG_CONTENT_3.DIRECT_VALUES)).toBe(
      MOCK.BIG_CONTENT_3.EXPECTED,
    )
  })
})
