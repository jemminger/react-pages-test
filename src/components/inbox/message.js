
import React from "react"
import { render } from "react-dom"

export default class Message extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const id = this.props.params.id
    this.setState({ id: id })
  }

  render() {
    return (
      <div>
        <h2>Message [{ this.state.id }]</h2>
      </div>
      )
  }
}
