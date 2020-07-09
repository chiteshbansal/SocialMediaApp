import React from 'react';
import classes from './Navbar.module.css';
import Logo from '../../Assets/Images/logo.jpg';
import {Link} from 'react-router-dom';
import avatar from '../../Assets/Images/avatar.jpg';
const  Navbar=(props)=> {
    return (
        <div className={classes.Navbar}>
            <div className={classes.left_part}>
                <Link to ="/Home"><img src = {Logo} alt="Logo" height= '50' width='100'/></Link>
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
                        <li><Link to = "/logout">Log Out</Link></li>
                        <li><Link to = "login">Log IN</Link></li>
                        <li><Link to = "register">Register</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;