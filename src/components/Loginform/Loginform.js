import React from "react";
import classes from "./Loginform.module.css";
class Loginform extends React.Component {
    constructor(){
        super();
        this.state={
            email:"",
            password:'',
        }
    }
    onFormsubmitHandler = ()=>{
        // event.preventdefault();
        console.log(this.state.email,this.state.password);

    }

    onemailChangeHandler = (e)=>{
        this.setState({
            email:e.target.value,
        });
    }
    
    onpasswordChangeHandler = (e)=>{
        this.setState({
            password:e.target.value,
        });
    }
  render() {
    return (
      <div className={classes.loginformcnt}>
        <div className={classes.loginform}>
          <div className={classes.Login_left}>
            <div>
              <h2>Hello , Friend...</h2>
            </div>
            <form >
              <div className={classes.formelement}>
                <label>Email:</label>
                <input
                  type="email"
                  name="username"
                  placeholder="Enter the username"
                  required
                  onChange = {this.onemailChangeHandler}
                />
              </div>
              <div className={classes.formelement}>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter the password "
                  required 
                  onChange = {this.onpasswordChangeHandler}
                />
              </div>
              <div className={classes.formelement}>
                <input type="submit" name="submit" value="Login" onClick={this.onFormsubmitHandler} />
              </div>
            </form>
          </div>
          <div className={classes.Login_right}>Welcome Back....</div>
        </div>
      </div>
    );
  }
}

export default Loginform;
