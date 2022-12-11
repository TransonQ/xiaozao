import { useEffect, useState } from 'react'
import './App.css'
import { List } from './List'

function App() {
  // 数据驱动 UI , 这个状态就是列表渲染的数据
  const [todoList, setTodoList] = useState([])
  // input 需要受控
  const [input, setInput] = useState('')
  // 点击 add 的回调函数
  const handleAdd = () => {
    setTodoList((prevList) => [input, ...prevList])
    setInput('')
  }

  useEffect(() => {
    console.log('todoList: ', todoList)
  }, [todoList])

  return (
    <div className='contain'>
      <h3>todo list</h3>
      <div>
        input
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <List
        list={todoList}
        setList={setTodoList}
      />
    </div>
  )
}

export default App
