import React, { Component } from 'react'

export default class AddContact extends React.Component {
  render() {
    return (
      <div className="add-contact">
        <h2>Add Contact</h2>
        <form className="form">
            <div className="form-field">
              <input type="text" className="form-control" placeholder="Name"></input>
            </div>
            <div className="form-field">
              <input type="text" className="form-control" placeholder="Email"></input>
            </div>
            <button className="button">Add</button>
        </form>
      </div>
    )
  }
}