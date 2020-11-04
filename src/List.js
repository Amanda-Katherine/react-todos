import React, {Component} from 'react'

class List extends Component {


  render() {
    return (
      <ul>
         {this.props.list.map(item => <li key={item}>{item}</li>)}
      </ul>
    )
  }

}

export default List

 
