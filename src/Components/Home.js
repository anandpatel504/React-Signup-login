import React, { Component } from "react";
import Header from './Header';
import { MDBInput, MDBCollapse, Card, MDBBtn, MDBCard } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';


export class Home extends Component {
  state = {
    isOpen: false,
    collapseID: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  toggleCollapse1 = () => {
    this.setState({
      collapseID: true
    })
  }

  render() {
    return (
      <div>
      <Header/>
      <Card className="container">
        <div>
          <MDBInput onFocus={this.toggleCollapse1} label="Add New ToDo......" />

          <MDBCollapse
            isOpen={this.state.collapseID}>
            <MDBInput label="Add description here.." />
            <div className="float-sm-right" >
              <MDBBtn onClick={() => { this.setState({ collapseID: false }) }} gradient="peach">Cancel</MDBBtn>
              <MDBBtn className="Add_button" gradient="purple">Add..+</MDBBtn>
            </div>
          </MDBCollapse>
        </div>
      </Card>
      <Card className="container">
        <p>Hello NavGurukul</p>
      </Card>
      </div>
    )
  }
}

export default Home;
