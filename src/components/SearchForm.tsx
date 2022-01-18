import { useState } from "react"
import stales from './index.module.css'

type PropsType = {
  setSeatch: (text: string) => void
}

export const SearchForm: React.FC<PropsType> = ({ setSeatch }) => {

  const [inputValue, setInput] = useState<string>('okmic')

  return <div className={stales.wrapper}>
    <input type="text" value={inputValue} onChange={(e) => setInput(e.target.value)} /> 
    <button onClick={() => {
      setSeatch(inputValue)
    }}>find</button>
  </div>
}