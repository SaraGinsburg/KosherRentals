import React from 'react'
import UserItem from './UserItem'

import './UsersList.css'
const UsersList = (props) => {
  if (props.items.length === 0) {
    return <div className='center'>No Users Found</div>
  }
  return (
    <ul className='users-list'>
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placesCount={user.places}
        />
      ))}
      )
    </ul>
  )
}

export default UsersList
