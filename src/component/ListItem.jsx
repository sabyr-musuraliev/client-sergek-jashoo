import React from 'react'
import '../styles/ListItem.css'
import StatusTable from './UI/StatusTable'
import DropDown from './UI/DropDown'
import Avatar from './UI/Avatar/Avatar'

const ListItem = (props) => {
  return (
    <tr>
    <th scope="row">{props.index}</th>
    <td><Avatar
        name={props.name.firstname}
        width={props.width}
        height={props.height}
        lastname={props.name.lastname}
        isLoaded={props.isLoad}
        fontSize={props.fontSize}
      /></td>
    <td>{props.name.firstname} {props.name.lastname}</td>
    <td><StatusTable text={(props.status) ? 'На стационаре' : 'Выписан'} classTitle={(props.status) ? 'stationar': 'out'}/></td>
    <td><DropDown text='Действия' to={props.to} id={props.id} actions={props.action}/></td>
    </tr>
  )
}

export default ListItem