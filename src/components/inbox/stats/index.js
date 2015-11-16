
import React from "react"
import { render } from "react-dom"
import { Link } from "react-router"

export default class InboxStats extends React.Component {
  render() {
    return (
      <div>
        <h2>InboxStats</h2>
        <p><Link to="inbox/messages/1">Message 1</Link></p>
        <p><Link to="inbox/messages/2">Message 2</Link></p>
      </div>
    )
  }
}
