import React, {Component} from 'react'

export default class List extends Component {


  render() {

    return (
      <div>
        <li>{this.props.list.name}</li>
      </div>
    )

  }


}
