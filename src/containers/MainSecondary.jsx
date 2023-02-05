import { React, Component } from 'react'

export default class MainSecondary extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="name">
        <p>this is a task detail and only show corresponding with the task's ip</p>
      </div>
    )
  }
}
