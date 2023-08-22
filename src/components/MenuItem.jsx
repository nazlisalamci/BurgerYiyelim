import React from 'react'
import '../style/menu.css'

const MenuItem = ({burger}) => {
    const { name, image ,content,price} = burger;

  return (
    <div className='menuItem'>
        <div style={{backgroundImage:`url(${image})` }}></div>
        <h1 >{name}</h1>
        <h6>{content}</h6>
        <p>{price}</p>
        
    </div>
  )
}

export default MenuItem