import React, {PureComponent, Fragment} from 'react'
import Lists from './Lists'
import List from './List'
import ListForm from './ListForm'
import {Route, Switch} from 'react-router-dom'

class ListContainer extends PureComponent {

  constructor(props) {
      super(props)
      this.state = {
        lists: []
      }
      this.handleSubmit = this.handleSubmit.bind(this)
    }


    componentDidMount() {
      fetch("http://localhost:3000/lists")
      .then(response => response.json())
      .then(lists => {this.setState({lists: lists})})

    }


    handleSubmit(formData){
      const list = {name: formData.listName}
      const options = {
        method: "POST",
        headers: {"Content-Type": "application/json", "Accept": "application/json"},
        body: JSON.stringify({list})
      }

      fetch("http://localhost:3000/lists", options)
      .then(r => r.json())
      .then(list => {
        this.setState((prevState) => {
          return {lists: [...prevState.lists, list]}
        })
      })


    }


    render() {
      console.log(this.state)
      return (

          <Switch>
              <Route exact path="/lists">
                <Lists lists={this.state.lists}/>
              </Route>
              <Route exact path="/lists/new">
                <ListForm submitForm={this.handleSubmit}/>
              </Route>
              <Route exact path="/lists/:id" render={(routerProps) => <List list={this.state.lists.find(list => list.id === parseInt(routerProps.match.params.id))}/>}/>
            </Switch>

          
      )
    }

}

export default ListContainer
