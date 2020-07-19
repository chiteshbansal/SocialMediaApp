
import classes from './Navbar.module.css';
import Logo from '../../Assets/Images/logo.jpg';
import {connect} from 'react-redux';
import * as actions from '../../Store/actions/index';
import {Link} from 'react-router-dom';
import avatar from '../../Assets/Images/avatar.jpg';
import React, { Component } from 'react'



class Navbar extends Component {

    onLogOutHandler = () =>{
        this.props.onLogOut();
    }
    render() {
        const {isLoggedIn,user} = this.props.auth;
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
                <Link to='/settings'>
                <img src={avatar} 
                    alt="username" 
                    className={classes.user_dp}
                    height= '60' width='60'/>
                </Link>
                <span className={classes.username}>{isLoggedIn ? user.name:"Guest"}</span>
                <div className={classes.UserActions}>
                    <ul>
                        {isLoggedIn && <li><Link to = "/logout" onClick={this.onLogOutHandler}>Log Out</Link></li>}
                        {!isLoggedIn && <div><li><Link to = "login">Log IN</Link></li>
                        <li><Link to = "register">Register</Link></li></div>}
                    </ul>
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        auth:state.auth,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        onLogOut : () => dispatch(actions.logOut()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);