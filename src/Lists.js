import React, {Component} from 'react'
import List from './List'
import ListForm from './ListForm'

class Lists extends Component {

  constructor(props) {
      console.log("constructor")
      super(props)
      this.state = {
        lists: [],
        id: (Math.floor(Math.random() * Math.floor(100))),
        loading: true,
        tracker: 0
      }
      this.handleSubmit = this.handleSubmit.bind(this)
    }


    componentDidMount() {
      console.log('componentDidMount')
      fetch("http://localhost:3000/lists")
      .then(response => response.json())
      .then(lists => {this.setState({lists: lists})})
      this.setState((prevState) => ({loading: !prevState.loading}))

    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //   console.log('componentDidUpdate')
    //   // if (prevState.lists.length % 2 === 0) {
    //   //   this.setState({tracker: prevState.tracker+=1})
    //   // }
    // }
    //
    // componentWillUnmount() {
    //   console.log('componentWillUnmount')
    // }


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
      console.log("render")
      // debugger
      return (
        <div>
          <ListForm submitForm={this.handleSubmit}/>
          <ul>
             {this.state.loading ? "LOADING!!!" : this.state.lists.map(list => <List list={list}/>)}
          </ul>
        </div>
      )
    }

}

// List.defaultProps = {
//   list: ["Default", "Values"]
// }

export default Lists
