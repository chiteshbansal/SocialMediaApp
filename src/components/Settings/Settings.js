import React, { Component } from 'react'
import classes from './Settings.module.css';
import avatar from '../../Assets/Images/avatar.jpg';
import {connect} from 'react-redux';
class Settings extends Component {
    constructor(props){
        super(props);
        this.state={
            name:this.props.user.name,
            email:this.props.user.email,
            password:this.props.user.password,
            EditMode:false,
        }
    }
    EnableEditModeHandler  = () =>{
        this.setState({
            EditMode:true,
        })
    }

    changeModeHandler  = () =>{
        this.setState({
            EditMode:true,
        })
    }

    DisableEditModeHandler = ()=>{
        this.setState({
            EditMode:false,
        })
    }
    onFieldChangeHandler = (event,field) =>{
        this.setState({
            [field]:event.target.value,
        })
    }
    render() {
        console.log(this.state.name,this.state.email,this.state.password);
        const {EditMode} = this.state;
        const {user} = this.props;
        return (
            <div className={classes.settings}>
                <div className={classes.img_cnt}>
                    <img src = {avatar} alt ="userprofile"/>
                </div>
                <div className={classes.user_info}>
                    <div className={classes.field}>
                        <div className={classes.label}>Name </div>
                        {EditMode?<input type="text" value = {this.state.name} onChange={(event) =>this.onFieldChangeHandler(event,'name')}/>:
                        <div className={classes.value}> {user.name}</div>}
                    </div>
                    <div className={classes.field}>
                        <div className={classes.label}>Email </div>
                        {EditMode?<input type="text" value={this.state.email} onChange={(event) =>this.onFieldChangeHandler(event,'email')}/>:
                        <div className={classes.value}> {user.email}</div>}
                    </div>
                    {EditMode && <div className={classes.field}>
                        <div className={classes.label}>New Password </div>
                        <input type="password" value={this.state.password} onChange={(event) =>this.onFieldChangeHandler(event,'password')}/>
                        </div>}
                    {EditMode && <div className={classes.field}>
                    <div className={classes.label}>Confirm Password </div>
                    <input type="password"/>
                    </div>}
                    <div>
                        {EditMode?<button className={classes.save_btn} onClick = {this.updateInfoHandler}>Save</button>:
                                    <button className={classes.edit_btn} onClick={this.EnableEditModeHandler}>Edit</button>}
                        {EditMode && <button className={classes.back_btn} onClick={this.DisableEditModeHandler}>Back</button>}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        user:state.auth.user
    }
}
export default connect(mapStateToProps)(Settings);
