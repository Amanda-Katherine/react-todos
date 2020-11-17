import React, {PureComponent, Fragment} from 'react'
import Lists from './Lists'
import List from './List'
import ListForm from './ListForm'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'

class ListContainer extends PureComponent {

  // constructor(props) {
  //     super(props)
  //     this.state = {
  //       lists: []
  //     }
  //     // this.handleSubmit = this.handleSubmit.bind(this)
  //   }

    //
    // componentDidMount() {
    //   fetch("http://localhost:3000/lists")
    //   .then(response => response.json())
    //   .then(lists => {this.setState({lists: lists})})
    //
    // }


    // handleSubmit(formData){
    //   const list = {name: formData.listName}
    //   const options = {
    //     method: "POST",
    //     headers: {"Content-Type": "application/json", "Accept": "application/json"},
    //     body: JSON.stringify({list})
    //   }
    //
    //   fetch("http://localhost:3000/lists", options)
    //   .then(r => r.json())
    //   .then(list => {
    //     this.setState((prevState) => {
    //       return {lists: [...prevState.lists, list]}
    //     })
    //   })
    //
    //
    // }


    render() {
      return (

          <Switch>
              <Route exact path="/lists">
                <Lists lists={this.props.lists}/>
              </Route>
              <Route exact path="/lists/new">
                <ListForm submitForm={this.handleSubmit}/>
              </Route>
              <Route exact path="/lists/:id" render={(routerProps) => <List {...routerProps } list={this.props.lists.find(list => list.id === parseInt(routerProps.match.params.id))} />}/>
            </Switch>


      )
    }

}

const mapStateToProps = state => {
  
    return {
      lists: state.lists
    }
}

export default connect(mapStateToProps)(ListContainer)
