import React from 'react'

import './list.css'

export const List = ({ list, setList }) => {
  // // 点击 x 的回调函数
  // const handleDelete = (i) => () => {
  //   setList((prevList) => {
  //     return prevList.filter((_, index) => index !== i)
  //   })
  // }

  return (
    <ul className='list'>
      {list.map((s, i) => {
        return (
          <li key={i}>
            {s}
            <div
              className='delete'
              // onClick={handleDelete(i)}
              onClick={() =>
                setList((list) => list.filter((_, index) => index !== i))
              }
            >
              x
            </div>
          </li>
        )
      })}
    </ul>
  )
}
