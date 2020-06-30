import React from 'react';
import classes from './Navbar.module.css';
import Logo from '../../Assets/Images/logo.jpg';
import avatar from '../../Assets/Images/avatar.jpg';
const  Navbar=(props)=> {
    return (
        <div className={classes.Navbar}>
            <div className={classes.left_part}>
                <img src = {Logo} alt="Logo" height= '50' width='100'/>
            </div>
            <div className={classes.middle_part}>
                <input type='text' name='seachbar'></input>
                <button>Search</button>
            </div>
            <div className={classes.right_part}>
                <img src={avatar} 
                    alt="username" 
                    className={classes.user_dp}
                    height= '60' width='60'/>
                <span className={classes.username}>Chitesh Bansal</span>
                <div className={classes.UserActions}>
                    <ul>
                        <li>Log Out</li>
                        <li>Log IN</li>
                        <li>Register</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;