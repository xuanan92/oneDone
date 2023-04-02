import React, { Component } from "react"
import { Link } from 'react-router-dom'

export default class Name extends Component {
  constructor(props) {
    super(props)
    // this.handleSubmit= this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      username: '',
      password: ''
    }
  }


  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    return (
      <>
        <div className="p-2 bg-[var(--foregr)]">
          <div className="text-center">
            <h1 className="p-2">Register here!</h1>
          </div>
          <table className="m-auto">
            <thead>
              <th></th>
              <th></th>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Username:</td>
                <td className="p-2">
                  <input
                    type="text"
                    name="username"
                    className="p-2 border border-black rounded"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="p-2">Password:</td>
                <td className="p-2">
                  <input
                    type="text"
                    name="username"
                    className="p-2 border border-black rounded"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td className="text-center font-bold">
                  <input
                    type="submit"
                    name=""
                    className="p-2 border border-gray-400 rounded"
                    value="Submit"
                  />
                </td>
              </tr>
              <tr>
                <td colspan="2" className="p-2">
                  <p className="p-2">Already have account? <Link to="/login">Login here</Link></p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    )
  }
}
