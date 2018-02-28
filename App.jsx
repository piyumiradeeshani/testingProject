import React, {Component} from 'react';
import Form from "./Form";
import Login from "./Login";
export default class App extends React.Component{
  render() {
    return (
      <div>
        <h1> Waste Management System</h1>
        <Login/>

      </div>
    );
  }
}
