import React from 'react'
import './MyButton.css'

const MyButton = ({children, classTitle,color, ...props}) => {
  return (
    <button {...props} className={color + " btn " + classTitle}>{children}</button>
  )
}

export default MyButton