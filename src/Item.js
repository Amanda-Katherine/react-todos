import React, {Component} from 'react'

export default class Item extends Component {


  render() {

    return (
      <div>
      <button onClick={() => this.props.callbackFn("here is info")}>Click me for callback!</button>
        <li>{this.props.item}</li>
      </div>
    )

  }


}
