import React from 'react'
import { Link } from 'react-router-dom'
import AddContactCounter from './AddContactCounter'

export default class AddContact extends React.Component {

  state = {
    name: "",
    email: "",
    id: 1
  }

  initialId = 1;

  // componentDidMount() {
  //   this.getCurrentIds();
  //   // this.countCurrentIds();
  //   console.log("Component has been rendered");
  // }
  
  getCurrentIds = () => {
    const getInitialId = JSON.parse(localStorage.getItem("initialId"));
    if (typeof getInitialId !== "number") {
      localStorage.setItem("initialId", 1);
      console.log("woop");
    }
    this.initialId = getInitialId;
    return getInitialId;
  }

  countCurrentIds = () => JSON.parse(localStorage.getItem("contacts")).length

  addNewContact = e => {
    e.preventDefault();

    this.initialId = this.getCurrentIds();
    this.initialId++;
    this.setState({id: this.initialId});

    //current state is newly added contact
    this.props.addContactHandler(this.state);

    
    localStorage.setItem("initialId", this.initialId);
    console.log(this.countCurrentIds())
    
    //reset form fields
    this.setState({name: "", email: ""});

    // render() {
    //   return ( <AddContactCounter countCurrentIds={this.countCurrentIds}/> )
    // }
  }

  render() {
    return (
      <div className="add-contact">

        <AddContactCounter countCurrentIds={this.countCurrentIds}/>

        <form className="form" onSubmit={ this.addNewContact }>
            <div className="form-field">
              <input type="text" className="form-control" placeholder="Name" onChange={ e => this.setState({name: e.target.value})} value={this.state.name} required/>
            </div>
            <div className="form-field">
              <input type="text" className="form-control" placeholder="Email"  onChange={ e => this.setState({email: e.target.value})} value={this.state.email}/>
            </div>
            <button className="button"> Add</button>
        </form>

        <Link to="/">
          <button className="button">View Contacts</button>
        </Link>

      </div>
    )
  }
}