import './App.css'

const names = ['张无忌', '周芷若', '杨不悔', '小昭', '赵敏']
function App() {
  const list = names.map((name, i) => (
    <li
      key={i}
      style={{ color: i === names.length - 1 ? 'red' : '' }}
    >
      {name}
    </li>
  ))

  return <ul>{list}</ul>
}

export default App
