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
    return <li>{props.list.name}</li>

}
