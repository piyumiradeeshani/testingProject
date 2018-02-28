import React from 'react';
import axios from 'axios';
import $ from "jquery";
<scripts>
<script src="./node_modules/react-bootstrap/dist/react-bootstrap.min.js"></script>
<script src="./node_modules/react-bootstrap/dist/react-bootstrap.js"></script>
<link rel="stylesheet" href=".././src/lib/css/bootstrap.min.css"/>
<link href='https://fonts.googleapis.com/css?family=Passion+One' rel='stylesheet' type='text/css'/>
<link href='https://fonts.googleapis.com/css?family=Oxygen' rel='stylesheet' type='text/css'/>
</scripts>

class Form extends React.Component {
  constructor(){
  super();
  this.state={
        FirstName: '',
        LastName: '',
        Mobile: '',
        GUsername: '',
        GPassword:''
};

}

handleChange(event){

//  console.log(stri);
  this.setState({
    [event.target.name]:event.target.value
  });
}

handleSubmit(event){
  event.preventDefault();
//  var text=this.state.text; this.state.FirstName,this.state.LastName, this.state.Mobile, this.state.GUsername, this.state.GPassword
  console.log("form was submitted", this.state);
  //axios.post('https://localhost:53034/api/Generator/PostGenerator',this.state  )
  //    .then((result) => {
                  //access the results here....
    //    });

$.ajax({
    type: 'POST',
    url: 'http://localhost:53034/api/Generator/SaveGenerator',
    datatype: 'json',
    data: this.state
  })
  .done(function(data) {
        console.log(data);


      })
      .fail(function(jqXhr) {
        console.log('failed to register');
      });

}

render() {
  return (
    <form onSubmit={this.handleSubmit.bind(this)}>

      <input name= 'FirstName' placeholder= "First Name" onChange={this.handleChange.bind(this)} value={this.state.FirstName}/> <br/><br/>
      <input name= 'LastName' placeholder= "Last Name" onChange={this.handleChange.bind(this)} value={this.state.LastName}/><br/><br/>
      <input name= 'Mobile' placeholder= "Mobile" onChange={this.handleChange.bind(this)} value={this.state.Mobile}/><br/><br/><br/>
      <input name= 'GUsername' placeholder= "Username" onChange={this.handleChange.bind(this)} value={this.state.GUsername}/><br/><br/>
      <input name= 'GPassword' placeholder= "Password" onChange={this.handleChange.bind(this)} value={this.state.GPassword}/><br/><br/>

      <button>Submit</button>
      </form>

  );
}
}

export default Form;
