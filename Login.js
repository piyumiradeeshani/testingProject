import React from 'react';
import axios from 'axios';
import $ from "jquery";


class Login extends React.Component {
  constructor(){
  super();
  this.state={

        GUsername: '',
        GPassword:'',
        message:'',
        hits:''
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
var mydata={
  GUsername: this.state.GUsername,
  GPassword: this.state.GPassword
}
$.ajax({
    type: 'POST',
    url: 'http://localhost:53034/api/Generator/GeneratorLogin',
    datatype: 'json',
    data: mydata,
//  })
success: function(data) {
        this.setState({hits: data.Data}); // Notice this
      }.bind(this),
      error: function(jqXhr) {
        console.log('failed to Log');
      }.bind(this)

    });

}

render() {
  return (
    <div>

    <form onSubmit={this.handleSubmit.bind(this)}>

      <input name= 'GUsername' placeholder= "Username" onChange={this.handleChange.bind(this)} value={this.state.GUsername}/><br/><br/>
      <input name= 'GPassword' placeholder= "Password" onChange={this.handleChange.bind(this)} value={this.state.GPassword}/><br/><br/>

      <button>Login</button>
      </form>

      <div>{this.state.hits}</div>

    </div>
  );
}
}

export default Login;
