export default function addList(list){
    console.log("addList")
  return {
    type: "ADD_LIST",
    payload: list
  }
}
