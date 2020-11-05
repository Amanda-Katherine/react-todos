import React, {Component} from 'react'
import Item from './Item'
import ItemForm from './ItemForm'

class List extends Component {

    constructor(props){
      super(props)
      this.state = {list: ["Coffee", "Ice Cream"]}
    }

    handleSubmit(formData){

      this.setState((state) => {

        return {list: [...state.list, formData.itemName]}
      })
    }


    render() {

      return (
        <div>
          <ItemForm submitForm={this.handleSubmit.bind(this)}/>
          <ul>
             {this.state.list.map(item => <Item item={item}/>)}
          </ul>
        </div>
      )
    }

}

// List.defaultProps = {
//   list: ["Default", "Values"]
// }

export default List
