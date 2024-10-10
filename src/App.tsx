import { useState } from "react"
import UistringDisplayComponent from "./lib/components/UistringDisplayComponent"
import { InputParamI } from "./lib/types"
import "./App.css"
import s from "./App.module.scss"

const inputParams: InputParamI[] = [
  { index: 0, value: "PARAM 1" },
  { index: 2, value: "PARAM 3" },
]
const directValues = ["DIRECT VALUE FIRST", "DIRECT VALUE 2nd"]

function App() {
  const [previewValue, setPreviewValue] = useState("")

  return (
    <div className={s.mainPageCnt}>
      <div className={s.playgroundCnt}>
        <div className={s.previewCnt}>
          <h1 className={s.previewTitle}>Preview (how it displays in Dragon Nest)</h1>
          <UistringDisplayComponent value={previewValue} className={s.uistringPreview} inputParams={inputParams} directValues={directValues} />
        </div>
        <div className={s.editorCnt}>
          <h1 className={s.previewTitle}>Type some text which will be automatically displayed</h1>
          <textarea
            onChange={(e) => setPreviewValue(e.target.value)}
            className={s.inputText}
            placeholder='Type uistring text... #rTesting|#bTest#y%d %d#l{0} {2}'
          />
        </div>
      </div>
    </div>
  )
}

export default App
