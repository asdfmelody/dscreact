import React, {Component, useState}from 'react';
import './App.css';

class RegisterForm extends Component{
  render(){
    return (
    
      <div>
        <h1>회원가입</h1>
        <p>
        <input type="text" defaultValue = "아이디"></input></p>
        <p>
        <input type="text" defaultValue = "비밀번호"></input></p>
        <p>
        <input type="text" defaultValue = "비밀번호재확인"></input></p>
        <p>
        <input type="text" defaultValue = "이름"></input></p>
        <p>
        <input type="date"></input></p>
        <p>
        <input type="text" defaultValue = "휴대전화"></input></p>
        <p>
          <input type = "submit" defaultValue="가입하기"></input>
        </p>
      </div>
    );
  }
}

// class Submit extends Component {
//   render(){
//     return (

//     );
//   }
// }

class App extends Component{
  render(){
    return (
      <div className =  "App">
        <RegisterForm></RegisterForm>
      </div>
    );
  }
}

export default App;
