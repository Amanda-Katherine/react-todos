import React, {PureComponent, Fragment} from 'react'
import Lists from './Lists'
import List from './List'
import ListForm from './ListForm'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import fetchLists from './actions/fetchLists'

class ListContainer extends PureComponent {

  // constructor(props) {
  //     super(props)
  //     this.state = {
  //       lists: []
  //     }
  //     // this.handleSubmit = this.handleSubmit.bind(this)
  //   }

    //
    componentDidMount() {
      // fetch("http://localhost:3000/lists")
      // .then(response => response.json())
      // .then(lists => {this.setState({lists: lists})})
        const lists = [{name: "Grocery", id: 1}, {name: "Work", id: 2}, {name: "Errands", id: 3}]
        // const action = {type: "FETCH_LISTS", payload: lists}
        this.props.fetchLists(lists)
        // fetchLists(lists)
    }


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
                <ListForm />
              </Route>
              <Route exact path="/lists/:id" render={(routerProps) => <List {...routerProps } list={this.props.lists.find(list => list.id === parseInt(routerProps.match.params.id))} />}/>
            </Switch>


      )
    }

}

const mapStateToProps = ({lists}) => {
  // const lists = state.lists
    return {
      lists
    }
}

// const mapDispatchToProps = dispatch => {
//
//   return {
//     fetchLists: (lists) => dispatch({type: "FETCH_LISTS", payload: lists})
//   }
//
// }

export default connect(mapStateToProps, {fetchLists: fetchLists})(ListContainer)
