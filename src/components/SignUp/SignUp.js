import React, { Component } from "react";
import classes from "../Loginform/Loginform.module.css";
import { connect } from "react-redux";
import * as actions from "../../Store/actions/index";
import { Redirect } from "react-router";
class SignUp extends Component {
    state={
        email:"",
        password:"",
        username:"",
        confirm_password:"",
    }
    componentWillUnmount() {
      this.props.onClearAuthState();
  }

    onSubmitHandler = () =>{
        const {email,password,username,confirm_password} = this.state;
        this.props.onSignUpHandler(email,password,username,confirm_password);
    }

    onInputChangeHandler = (event,field) =>{
        console.log(event.target.value);
        this.setState({
            [field]:event.target.value,
        })
    }
  render() {
    const { error, inProgress,isLoggedIn} = this.props.auth;
    if(isLoggedIn){
      return <Redirect to ="/" />
    }
    let assignClass = [classes.registerform, classes.loginform];
    return (
      <div className={classes.registerformcnt}>
        <div className={assignClass.join(" ")}>
          <div className={classes.register_left}>
            <div>
              <h2>Hello , Friend...</h2>
            </div>
            {error && <div> {error} </div>}
            <form >
              <div className={classes.formelement}>
                UserName:
                <input type="text" name="username" required onChange = {(event)=>{this.onInputChangeHandler(event,'username')}}/>
              </div>
              <div className={classes.formelement}>
                Password:
                <input type="password" name="password" required onChange = {(event)=>{this.onInputChangeHandler(event,'password')}}/>
              </div>
              <div className={classes.formelement}>
                Password Again:
                <input type="password" name="password_again" required onChange = {event =>{this.onInputChangeHandler(event,'confirm_password')}} />
              </div>
              <div className={classes.formelement}>
                Email:
                <input type="email" name="email" required onChange = {event =>{this.onInputChangeHandler(event,'email')}}/>
              </div>

              <button
                type="submit"
                name="submit"
                value="Register"
                onClick = {this.onSubmitHandler}
                disabled={inProgress}
              >
                Register
              </button>
            </form>
          </div>
          <div className={classes.register_right}>
            Welcome to quizzer, Glad to see you
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignUpHandler: (email, password, username, confirm_password) =>
      dispatch(actions.signUp(email, password, username, confirm_password)),
    onClearAuthState : () => dispatch(actions.clearAuthState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
