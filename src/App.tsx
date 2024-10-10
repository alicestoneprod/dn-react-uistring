import "./App.css"
import UistringDisplayComponent from "./lib/components/UistringDisplayComponent"
import { InputParamI } from "./lib/main.ts"

const str = "#r Just test: %d / %d / %d\\n#b Oops, somethingError \\n\\n\\n\\n#lIts just a uistring playground"

const inputParams: InputParamI[] = [{ index: 0, value: 20 }]

function App() {
  return (
    <div>
      <UistringDisplayComponent
        value={str}
        inputParams={inputParams}
        style={{
          width: 600,
        }}
      />
    </div>
  )
}

export default App
