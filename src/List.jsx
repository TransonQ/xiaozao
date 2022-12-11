import React from 'react'

import './list.css'

export const List = () => {
  return (
    <ul className='list'>
      <li>
        todo item <div className='delete'>x</div>
      </li>
    </ul>
  )
}
