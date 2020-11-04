import React, {Component} from 'react'
import List from './List'

class App extends Component {

  render() {
    const name = "Bob"
    return (

      <div className="App">
        <h1>Hello, {1+1}</h1>
        <List list={["Coffee", "Ice Cream"]}/>
      </div>

    );
  }

}


export default App;
