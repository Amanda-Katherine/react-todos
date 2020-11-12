import React, {Component} from 'react'
import {Redirect, withRouter} from 'react-router-dom'

class ListForm extends Component {

    constructor(props){
      super(props)
      this.state = {listName: "", loggedIn: true}
    }

    handleSubmit(event) {
      event.preventDefault()

      this.props.submitForm(this.state)
      this.setState({listName: ""})
      this.props.history.push("/lists")
    }

    handleChange(event){
      let name = event.target.name
      this.setState({
        [name]: event.target.value
      })
    }

    redirectOrRenderForm(){
      if (this.state.loggedIn) {
        return (
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.listName} name="listName"/>
            <input type="submit"/>
          </form>
        )
      } else {
          return <Redirect to="/lists" />
      }
    }

  render() {
    return (
      <>
        {this.redirectOrRenderForm()}
      </>

    )

  }


}

export default withRouter(ListForm)
