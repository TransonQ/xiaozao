import './App.css'

function App() {
  return (
    <>
      <h1>这是 App</h1>
      <span className='subTitle'>添加样式的效果</span>
      <HelloButton />
    </>
  )
}

function HelloButton() {
  return <button>hello</button>
}

export default App
