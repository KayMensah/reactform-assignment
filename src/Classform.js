import React, { useState } from "react";
// import Image from './Image';
import Picture from './images/reactjs-meme-1.png';
import "./App.css";

class Classform extends React.Component {
    constructor() {
        super()
        this.state ={text: "", email: "", password: ""};
    }
    handleTextChange = (event) => {
        this.setState({text: event.target.value});
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
    }
    handleSubmit = (event) => {
        event.preventDefault ();
        console.log(this.state.text, this.state.email, this.state.password);
    };

    render() {
        return (
        <div className="container">
            <div className="content">
          <div className="App">
              <div><h1>This is a simple login page using react.js</h1></div>
           <form onSubmit={this.handleSubmit}>
               <label>Name
               <input
               type="email" name="email" placeholder="Email"
               value={this.state.email}
               onChange={this.handleEmailChange}
               />
               </label>
               <br/>
               <br/>
               <label>Email
                <input
               type="password" name="password" placeholder="Password"
               value={this.state.password}
               onChange={this.handlePaswwordChange}
               />
               </label>
               <br/>
               <br/>
               <button>Submit</button>
           </form>
           <p>New to react.js? <a href="/#">Sign up now !!!</a></p>
           <img src={Picture} width="100" align="center" />
          </div>
          </div>
          </div>
        )
      }
    }
    export default Classform;