import React from 'react'
import '../../styles/ListItem.css'
import StatusTable from './StatusTable'
import DropdownButton from './DropdownButton'

const ListItemPlaceholder = (props) => {
  return (
    <tr className='placeholder-wave'>
    <th scope="row"><span style={{width: 30}} className="placeholder col-1"></span></th>
    <td><span style={{width: 30}} className="placeholder col-1"></span></td>
    <td><span style={{width: props.width}} className="placeholder col-4"></span></td>
    <td><StatusTable text="placeholder" classTitle='bg-secondary'/></td>
    <td><StatusTable text="placeholder" classTitle='bg-secondary'/></td>
    <td><DropdownButton text="placeholder" actions='Посмотреть карточку'/></td>
    </tr>
  )
}

export default ListItemPlaceholder