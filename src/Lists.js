import React, {PureComponent, Fragment} from 'react'
import List from './List'
import {Link} from 'react-router-dom'

class Lists extends PureComponent {


    render() {
      return (
            <ul>
               {this.props.lists.map(list => <><Link to={`/lists/${list.id}`}>{list.name}</Link><br></br></>) }
            </ul>
      )
    }

}


export default Lists


// <Fragment key={list.name}> <List list={list}/> </Fragment>
