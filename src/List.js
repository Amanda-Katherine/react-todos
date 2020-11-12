import React, {Component} from 'react'

// export default class List extends Component {
//
//
//   render() {
//
//     return (
//         <li>{this.props.list.name}</li>
//     )
//
//   }
//
//
// }

export default function List(props){
    // const list = props.lists.find(list => list.id === parseInt(props.match.params.id))
    return <li>{props.list && props.list.name}</li>

}
