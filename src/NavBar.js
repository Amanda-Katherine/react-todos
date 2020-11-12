import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar(props) {

  return (
    <>
      <Link to="/lists">All Lists</Link>
      <Link to="/lists/new">New List</Link>
    </>
  )

}
