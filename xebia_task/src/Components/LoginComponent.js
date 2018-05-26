import React from 'react'
import BaseComponent from './BaseComponent'
import {searchPeople} from '../Networking/helper'

export default class LoginComponent extends BaseComponent {

    constructor (props)
    {
        super(props)

        this._bind('onLoginClick', 'onLogin')
    }

    render() {
       return (
           <div>
               <div className="formContent">
                   <input id="nameField" className="inputText" type="text" placeholder="Enter Username" name="uname" required />
                   <label htmlFor="psw"><b>Password</b></label>
                   <input id="pwdField" className="inputText" type="password" placeholder="Enter Password" name="psw" required />

                   <button className="loginButton" type="submit" onClick={this.onLoginClick}>Login</button>
               </div>
           </div>
       )
    }

    onLogin(error, loginRes) {
        if(error) {
            alert("Could not find user")
        }
        else {
            this.props.history.push('home')
        }
    }

    onLoginClick(e) {
        let name = document.getElementById("nameField").value
        let pwd = document.getElementById("pwdField").value
        if(name && pwd) {
            searchPeople(name,pwd,this.onLogin)
        }
    }
}

