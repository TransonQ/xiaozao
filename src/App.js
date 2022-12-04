import './App.css'

function App() {
  const click = () => {
    alert('点我了')
  }

  return <button onClick={click}>点我</button>
}

export default App
