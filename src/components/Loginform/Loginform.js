import React from "react";
import classes from "./Loginform.module.css";
import * as actions from "../../Store/actions/index";
import { connect } from "react-redux";
import { Redirect } from "react-router";
class Loginform extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUnmount() {
    this.props.onClearAuthState();
  }
  onFormsubmitHandler = () => {
    // event.preventdefault();
    console.log(this.state.email, this.state.password);
    const { email, password } = this.state;
    this.props.onFormSubmission(email, password);
  };

  onemailChangeHandler = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  onpasswordChangeHandler = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  render() {
    const { error, inProgress,isLoggedIn } = this.props.auth;
    if(isLoggedIn){
      return <Redirect to ="/"/>
    }
    return (
      <div className={classes.loginformcnt}>
        <div className={classes.loginform}>
          <div className={classes.Login_left}>
            <div>
              <h2>Hello , Friend...</h2>
            </div>
            <form>
              <div className={classes.formelement}>
                <label>Email:</label>
                <input
                  type="email"
                  name="username"
                  placeholder="Enter the username"
                  required
                  onChange={this.onemailChangeHandler}
                />
              </div>
              <div className={classes.formelement}>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter the password "
                  required
                  onChange={this.onpasswordChangeHandler}
                />
              </div>
              {error && <div>invalid username or password</div>}
              <div className={classes.formelement}>
                <button
                  type="submit"
                  name="submit"
                  value="Login"
                  onClick={this.onFormsubmitHandler}
                  disabled={inProgress}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className={classes.Login_right}>Welcome Back....</div>
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
    onFormSubmission: (email, password) =>
      dispatch(actions.logIn(email, password)),
    onClearAuthState: () => dispatch(actions.clearAuthState()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Loginform);
