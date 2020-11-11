import React, {Component} from 'react'

export default class ListForm extends Component {

    constructor(props){
      super(props)
      this.state = {listName: ""}
    }

    handleSubmit(event) {
      event.preventDefault()

      this.props.submitForm(this.state)
      this.setState({listName: ""})
    }

    handleChange(event){
      let name = event.target.name
      this.setState({
        [name]: event.target.value
      })
    }



  render() {
    return (
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.listName} name="listName"/>
          <input type="submit"/>
        </form>
    )

  }


}
