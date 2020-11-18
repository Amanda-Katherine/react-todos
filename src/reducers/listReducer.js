export default function listReducer(state, action) {
  // debugger
  switch(action.type) {
    case 'FETCH_LISTS':
      return {lists: action.payload}
    case 'ADD_LIST':
      return {lists: [...state.lists, action.payload]}
    case 'DELETE_LIST':
      const newListArray = state.lists.filter(list => list.id !== action.payload)
      return {lists: newListArray}
    case 'EDIT_LIST':
      const editedListArray = state.lists.map(list => list.id === action.payload.id ? action.payload : list)
      return {lists: editedListArray}
  default:
    return state
  }

}
