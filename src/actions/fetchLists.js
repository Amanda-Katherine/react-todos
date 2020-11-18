export default function fetchLists(lists) {
  return {
    type: "FETCH_LISTS",
    payload: lists
  }
}
