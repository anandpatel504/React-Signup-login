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
import { GoogleLogin } from "react-google-login";

import axios from "axios";
import swal from "sweetalert";

class Signup extends React.Component {
  state = { redirect: "" };
  onSubmithandler = () => {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    axios
      .post("http://localhost:3050/register", {
        name: name,
        email: email,
        password: password
      })
      .then(data => {
        if (data.data.result) {
          swal("Account Created Successfully", "", "success").then(value => {
            if (value) {
              this.setState({
                redirect: <Redirect to="/login" />
              });
            }
          });
        } else {
          swal("User already exists.", "", "error", {
            buttons: ["Ok", "Login"]
          }).then(value => {
            if (value) {
              this.setState({
                redirect: <Redirect to="/login" />
              });
            }
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  responseGoogle=(data)=>{
    console.log(data);
    
  }
  render() {
    const smallStyle = { fontSize: "0.8rem" };
    return (
      <div className="main_signup">
        {this.state.redirect}
        <h3></h3>
        <MDBCol md="9" lg="7" xl="5" className="mx-auto mt-5">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign up</strong>
                </h3>
              </div>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  this.onSubmithandler();
                }}
              >
                <MDBInput
                  required
                  label="User name"
                  group
                  type="text"
                  validate
                  error="wrong"
                  id="name"
                  success="right"
                />
                <MDBInput
                  label="Your email"
                  group
                  type="email"
                  id="email"
                  validate
                  error="wrong"
                  success="right"
                  required
                />
                <MDBInput
                  label="Your password"
                  group
                  id="password"
                  type="password"
                  validate
                  containerClass="mb-0"
                  required
                />
                <div className="text-center pt-3 mb-3">
                  <MDBBtn
                    type="submit"
                    gradient="blue"
                    rounded
                    className="btn-block z-depth-1a"
                  >
                    REGISTER
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
                <GoogleLogin
                  clientId="1068327690839-9opvkgbjrkle3s107kfh896dgdiigqsp.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
                <MDBBtn
                  type="button"
                  color="blue"
                  rounded
                  className="z-depth-1a"
                >
                  <MDBIcon fab icon="linkedin" className="white-text" /> Login
                </MDBBtn>
              </div>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p
                className="grey-text d-flex justify-content-end"
                style={smallStyle}
              >
                Already a member?{" "}
                <Link to="login" className="blue-text ml-1">
                  {" "}
                  Sign In
                </Link>
              </p>
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
      </div>
    );
  }
}

export default Signup;
