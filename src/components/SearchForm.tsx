import { useState } from "react"
import stales from './index.module.css'

type PropsType = {
  setSetch: (text: string) => void
}

export const SearchForm: React.FC<PropsType> = ({ setSetch }) => {

  const [inputValue, setInput] = useState<string>("alpha")

  return <div className={stales.wrapper}>
    <input type="text" value={inputValue} onChange={(e) => setInput(e.target.value)} />
    <button onClick={() => {
      setSetch(inputValue)
    }}>find</button>
  </div>
}