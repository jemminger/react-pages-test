
import React from "react"
import { render } from "react-dom"

export default class Inbox extends React.Component {
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        { this.props.children }
      </div>
      )
  }
}
