import React, {Component} from 'react'
import ListContainer from './ListContainer'
import NavBar from './NavBar'

// class App extends Component {
//
//   render() {
    // return (
    //   <div className="App">
    //       <Lists />
    //   </div>
    // );
//   }
//
// }

function App(){

  return (
        <>
          <NavBar/>
          <ListContainer />
        </>
  );
}


export default App;
