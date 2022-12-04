import './App.css'

function App() {
  const hasLearned = true

  // if (hasLearned) {
  //   return <h1>张无忌学会了乾坤大挪移一人爆锤六大门派</h1>
  // } else {
  //   return <h1>张无忌偶遇山猴获九阳神功逼出寒毒</h1>
  // }

  let JSXMarkup = null

  if (hasLearned) {
    JSXMarkup = <h1>张无忌学会了乾坤大挪移一人爆锤六大门派</h1>
  } else {
    JSXMarkup = <h1>张无忌偶遇山猴获九阳神功逼出寒毒</h1>
  }

  return <>{JSXMarkup}</>
}

export default App
