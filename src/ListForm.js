import React, {Component} from 'react'
import {Redirect, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import addList from './actions/addList'
import editList from './actions/editList'
class ListForm extends Component {

    constructor(props){
      super(props)
      this.state = {name: (this.props.list ? this.props.list.name : ""), id: (this.props.list ? this.props.list.id : Math.floor(Math.random() * Math.floor(100000000)))}
    }

    handleSubmit(event) {
      console.log("handlesubmit")
      event.preventDefault()
      if (!this.props.list) {
          this.props.addList(this.state)
      } else {
        this.props.editList(this.state)
      }


      // this.props.submitForm(this.state)
      this.setState({name: "", id: ""})
      this.props.history.push("/lists")
    }

    handleChange(event){
      let name = event.target.name
      this.setState({
        [name]: event.target.value
      })
    }

    redirectOrRenderForm(){

        return (
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.name} name="name"/>
            <input type="submit"/>
          </form>
        )

    }

  render() {
    return (
      <>
        {this.redirectOrRenderForm()}
      </>

    )

  }


}

export default withRouter(connect(null, {addList, editList})(ListForm))
