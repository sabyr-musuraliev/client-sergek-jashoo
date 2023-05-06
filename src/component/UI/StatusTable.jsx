import React from 'react'
import './StatusTable.css'

const StatusTable = (props) => {
  
  return (
    <span className={`in_hospital ${props.classTitle}`}>{(props.text==='placeholder') ? <span style={{width: 90}} className='placeholder col-2'></span> : props.text}</span>
  )
}

export default StatusTable