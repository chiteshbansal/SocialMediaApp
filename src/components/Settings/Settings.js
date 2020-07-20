 import React, { Component } from 'react'
import classes from './Settings.module.css';
import avatar from '../../Assets/Images/avatar.jpg';
import {connect} from 'react-redux';
import * as actions from '../../Store/actions/index';
class Settings extends Component {
    constructor(props){
        super(props);
        this.state={
            name:this.props.user.name,
            email:this.props.user.email,
            password:this.props.user.password,
            confirmPassowrd:'',
            EditMode:false,
            error:null,
        }
    }
    EnableEditModeHandler  = () =>{
        this.setState({
            EditMode:true,
        })
    }


    DisableEditModeHandler = ()=>{
        this.setState({
            EditMode:false,
            error:null,
        })
    }
    onFieldChangeHandler = (event,field) =>{
        this.setState({
            [field]:event.target.value,
        })
    }

    updateInfoHandler = () =>{
        const {name,password,confirmPassword,email} = this.state;
        if(password===confirmPassword)
        {
            this.props.onEditHandler(name,password,confirmPassword,this.props.user._id,email);
            this.DisableEditModeHandler();
            this.setState({
                error:null,
            })
        }else{
            this.setState({
                error:"Confirm Password and Password don't match"
            });
        }
         
    }
    render() {
        const {EditMode} = this.state;
        const {user} = this.props;
        return (
            <div className={classes.settings}>
                <div className={classes.img_cnt}>
                    <img src = {avatar} alt ="userprofile"/>
                </div>
                <div className={classes.user_info}>
                    <div className={classes.field}>
                        <div className={classes.label}>Name: </div>
                        {EditMode?<input type="text" value = {this.state.name} onChange={(event) =>this.onFieldChangeHandler(event,'name')}/>:
                        <div className={classes.value}> {user.name}</div>}
                    </div>
                    <div className={classes.field}>
                        <div className={classes.label}>Email :</div>
                        {EditMode?<input type="text" value={this.state.email} onChange={(event) =>this.onFieldChangeHandler(event,'email')}/>:
                        <div className={classes.value}> {user.email}</div>}
                    </div>
                    
                    {EditMode && <div className={classes.field}>
                        <div className={classes.label}> Password </div>
                        <input type="password"  onChange={(event) =>this.onFieldChangeHandler(event,'password')}/>
                        </div>}
                    {EditMode && <div className={classes.field}>
                    <div className={classes.label}>Confirm Password </div>
                    <input type="password" required onChange={(event) =>this.onFieldChangeHandler(event,'confirmPassword')}/>
                    </div>}
                    {this.state.error&& <div className={classes.error_cnt}>{this.state.error}</div>}
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

const mapDispatchToProps = dispatch =>{
    return {
        onEditHandler:(name,password,confirmPassword,userId,email)  =>{return dispatch(actions.editUser(name,password,confirmPassword,userId,email))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Settings);
