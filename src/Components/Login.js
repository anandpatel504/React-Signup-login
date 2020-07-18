import React from "react";
import {
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon
} from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Link, Redirect } from "react-router-dom";

import axios from "axios";
import swal from "sweetalert";

class Login extends React.Component {
  state = { redirect: ""}
  onSubmithandler = () => {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    // console.log(email, password);
    axios
    .post("http://localhost:3050/login", {
      email: email,
      password: password
    })
    .then((data) =>{
      console.log(data);
      if(data.data.result==="pass"){
        swal("Wrong password...", "", "error")
      }
      else if(data.data.result){
        swal("Sign in successfully!", "", "success").then(value =>{
          if(value){
            this.setState({
              redirect: <Redirect to="/home" />
            })
          }
        })
      }else{
        swal("User is not exist!", "", "error")
      }
      
    })
    .catch((err) =>{
      console.log(err);
    })
  }

  render() {
    const smallStyle = { fontSize: "0.8rem" };
    return (
      <MDBCol md="9" lg="7" xl="5" className="mx-auto mt-3">
        {this.state.redirect}
        <MDBCard>
          <MDBCardBody className="mx-4">
            <div className="text-center">
              <h3 className="dark-grey-text mb-5">
                <strong>Sign in</strong>
              </h3>
            </div>
            <form
              onSubmit = {e => {
                e.preventDefault();
                this.onSubmithandler();
              }}
            >

            <MDBInput
              label="Your email"
              group
              type="email"
              id="email"
              validate
              error="wrong"
              success="right"
            />
            <MDBInput
              label="Your password"
              group
              type="password"
              id="password"
              validate
              containerClass="mb-0"
            />

            <div className="text-center pt-3 mb-3">
                <MDBBtn
                  type="submit"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                >
                  Sign in
                </MDBBtn>
            </div>
            </form>

            <div class="container">
              <hr class="hr-text" data-content="OR Sign In With : " />
            </div>
            <div className="row my-3 d-flex justify-content-center">
              <MDBBtn
                type="button"
                color="blue"
                rounded
                className="mr-md-3 z-depth-1a"
              >
                <MDBIcon
                  fab
                  icon="facebook"
                  className="white-text text-center"
                />{" "}
                Login
              </MDBBtn>
              <MDBBtn
                type="button"
                color="orange"
                rounded
                className="mr-md-3 z-depth-1a"
              >
                <MDBIcon fab icon="google-plus" className="white-text" /> Login
              </MDBBtn>
              <MDBBtn type="button" color="blue" rounded className="z-depth-1a">
                <MDBIcon fab icon="linkedin" className="white-text" />
                Login
              </MDBBtn>
            </div>
          </MDBCardBody>
          <MDBModalFooter className="mx-5 pt-3 mb-1">
            <p
              className="grey-text d-flex justify-content-end"
              style={smallStyle}
            >
              Already a member?{" "}
              <Link to="/signup" className="blue-text ml-1">
                {" "}
                Register
              </Link>
            </p>
          </MDBModalFooter>
        </MDBCard>
      </MDBCol>
    );
  }
}

export default Login;
