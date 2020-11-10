import React, {Component} from 'react'
import Lists from './Lists'

class App extends Component {

  constructor(){
      super()
      this.state = {showLists: true}
    }

    handleClick(){
      this.setState(prevState => ({showLists: !prevState.showLists}))
    }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick.bind(this)}>Toggle Lists</button>
        {this.state.showLists ? <Lists /> : null}
      </div>
    );
  }

}


export default App;
