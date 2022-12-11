import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        {`当前值${count > 10 ? '大于 10' : '在 1 - 10 以内'}: ${count}`}
      </button>
    </div>
  )
}

export default App
