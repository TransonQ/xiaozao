import './App.css'
import { List } from './List'

function App() {
  return (
    <div className='contain'>
      <h3>todo list</h3>
      <div>
        todo: <input /> <button>新增</button>
      </div>
      <List />
    </div>
  )
}

export default App
