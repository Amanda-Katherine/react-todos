import React, {PureComponent, Fragment} from 'react'
import List from './List'
import ListForm from './ListForm'

class Lists extends PureComponent {

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
      return (
          <>
            <ListForm submitForm={this.handleSubmit}/>
            <ul>
               {this.state.lists.map(list => <Fragment key={list.name}> <List list={list}/> </Fragment>)}
            </ul>
          </>
      )
    }

}

// List.defaultProps = {
//   list: ["Default", "Values"]
// }

export default Lists
