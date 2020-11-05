import React, {Component} from 'react'

export default class ItemForm extends Component {

    constructor(props){
      super(props)
      this.state = {itemName: ""}
    }

    handleSubmit(event) {
      event.preventDefault()

      this.props.submitForm(this.state)
      this.setState({itemName: ""})
    }

    handleChange(event){
      let name = event.target.name
      // this.setState({itemName: event.target.value})
      this.setState({
        [name]: event.target.value
      })
    }



  render() {
    return (
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.itemName} name="itemName"/>
          <input type="submit"/>
        </form>
    )

  }


}
