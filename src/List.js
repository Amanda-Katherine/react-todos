import React, {Component} from 'react'
import {connect} from 'react-redux'
import deleteList from './actions/deleteList'
import ListForm from './ListForm'

function List(props){

  const handleDelete = () => {
    props.deleteList(props.list.id)
    props.history.push('/lists')
  }
    // const list = props.lists.find(list => list.id === parseInt(props.match.params.id))
    return (
      <>
      <li>{props.list && props.list.name} <button onClick={handleDelete}>Delete</button></li>
      <ListForm list={props.list}/>
      </>
    )

}


export default connect(null, {deleteList})(List)
