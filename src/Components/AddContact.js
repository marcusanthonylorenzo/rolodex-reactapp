import React from 'react'

export default class AddContact extends React.Component {

  state = {
    name: "",
    email: "",
    id: 1
  }

  initialId = 1;
  
  getCurrentIds = () => {
    const getInitialId = JSON.parse(localStorage.getItem("initialId"));
    if (typeof getInitialId !== "number") {
      localStorage.setItem("initialId", 1);
      console.log("woop");
    }
    this.initialId = getInitialId;
    return getInitialId;
  }

  addNewContact = e => {
    e.preventDefault();

    this.initialId = this.getCurrentIds();
    this.initialId++
    this.setState({id: this.initialId});
    
    localStorage.setItem("initialId", this.initialId);

    //current state is newly added contact
    this.props.addContactHandler(this.state);
    
    //reset form fields
    this.setState({name: "", email: ""});
  }

  render() {
    return (
      <div className="add-contact">
        <h2>Add Contact</h2>
        <form className="form" onSubmit={ this.addNewContact }>
            <div className="form-field">
              <input type="text" className="form-control" placeholder="Name" onChange={ e => this.setState({name: e.target.value})} value={this.state.name} required/>
            </div>
            <div className="form-field">
              <input type="text" className="form-control" placeholder="Email"  onChange={ e => this.setState({email: e.target.value})} value={this.state.email}/>
            </div>
            <button className="button" style={{

            }}> Add</button>
        </form>
      </div>
    )
  }
}