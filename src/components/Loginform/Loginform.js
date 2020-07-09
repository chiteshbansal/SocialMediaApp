import React from 'react';
import classes from './Loginform.module.css';
const Loginform = () => {
    return (
            <div className={classes.loginformcnt}>
                <div className={classes.loginform}>
                        <div className={classes.Login_left}>
                            <div><h2>Hello , Friend...</h2></div>
                            <form action = "<?php echo $current_file?>" method="POST">
                                <div  className={classes.formelement}>
                                    <label>Username</label>
                                    <input type="text" name="username" placeholder="Enter the username" required/>
                                </div>
                                <div className={classes.formelement}>
                                    <label>Password</label>
                                    <input type="password" name="password" placeholder="Enter the password "required/>
                                </div>
                                <div className={classes.formelement}>
                                    <input type='submit'name="submit" value="Login"/>
                                </div>
                                
                            </form> 
                            <form action = "<?php echo $current_file?>" method="POST">
                                <input type='submit' value='Register' name="register"/>
                            </form>  
                        </div>
                        <div className={classes.Login_right}>
                            Welcome Back....
                        </div>
                    </div>
                </div>
    );
}

export default Loginform;
