import { useState } from 'react'
import './App.css'

function App() {
  // const hasLearned = true
  const [hasLearned, setHasLearned] = useState(false)
  const handleChange = () => setHasLearned(!hasLearned)

  let JSXMarkup = null

  if (hasLearned) {
    JSXMarkup = <h1>张无忌学会了乾坤大挪移一人爆锤六大门派</h1>
  } else {
    JSXMarkup = <h1>张无忌偶遇山猴获九阳神功逼出寒毒</h1>
  }

  return (
    <>
      <button onClick={handleChange}>切换武功状态</button>
      {JSXMarkup}
    </>
  )
}

export default App
