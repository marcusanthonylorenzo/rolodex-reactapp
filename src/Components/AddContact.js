import React from 'react'

export default class AddContact extends React.Component {

  initialId = 0

  state = {
    name: "",
    email: "",
    id: 0
  }



  addNewContact = e => {
    e.preventDefault();
    // this.state.name === "" && this.state.email === "" ? 
    //current state is newly added contact
    this.props.addContactHandler(this.state);
    //reset form fields
    this.setState({name: "", email: ""});
  }

  addNewId = () => {
    this.initialId++;
    this.setState({id: this.initialId});
  }


  render() {
    return (
      <div className="add-contact">
        <h2>Add Contact</h2>
        <form className="form" onSubmit={ e => {
          e.preventDefault();
          this.addNewId;
          this.addNewContact;
        }}>
            <div className="form-field">
              <input type="text" className="form-control" placeholder="Name" onChange={ e => this.setState({name: e.target.value})} value={this.state.name} required/>
            </div>
            <div className="form-field">
              <input type="text" className="form-control" placeholder="Email"  onChange={ e => this.setState({email: e.target.value})} value={this.state.email}/>
            </div>
            <button className="button">Add</button>
        </form>
      </div>
    )
  }
}