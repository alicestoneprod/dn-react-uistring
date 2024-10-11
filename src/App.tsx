import { useState } from "react"
import { UistringDisplayComponent } from "lib/components"
import s from "./App.module.scss"

function App() {
  const [previewValue, setPreviewValue] = useState("")

  return (
    <div className={s.mainPageCnt}>
      <div className={s.playgroundCnt}>
        <div className={s.previewCnt}>
          <h1 className={s.previewTitle}>Preview (how it displays in Dragon Nest)</h1>
          <UistringDisplayComponent value={previewValue} className={s.uistringPreview} />
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
