import React, {Component} from 'react'
import Item from './Item'

class List extends Component {

    constructor(props){
      super(props)
      this.state = {list: ["Coffee", "Ice Cream"], otherKey: "Value"}
    }

    getInfoFromItem(info){
      this.setState((state, props) => {
        return {otherKey: info}
      })
    }

  render() {

    return (
      <div>
        {this.state.otherKey}
        <ul>
           {this.state.list.map(item => <Item callbackFn={this.getInfoFromItem.bind(this)} item={item}/>)}
        </ul>
      </div>
    )
  }

}

// List.defaultProps = {
//   list: ["Default", "Values"]
// }

export default List
