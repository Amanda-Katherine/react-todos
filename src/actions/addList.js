export default function addList(list){

    return (dispatch) => {

      const options = {
        method: "POST",
        headers: {"Content-Type": "application/json", "Accept": "application/json"},
        body: JSON.stringify({list})
      }

      fetch("http://localhost:3000/lists", options)
      .then(r => r.json())
      .then(list => {dispatch({type: "ADD_LIST", payload: list})
      })
    }

}
