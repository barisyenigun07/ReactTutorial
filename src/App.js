import React, {Component} from 'react';
import Navbar from "./components/Navbar";
import User from './components/User';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="container">
        <Navbar title='User App'/>
        <hr/>
        <User
        name = "Barış Yenigün"
        salary = "5000"
        department = "Bilişim"
        />
        <User
        name = "Can Ekenoğlu"
        salary = "5000"
        department = "Yazılım"
        />
      </div>
    );
  }
  
}

export default App;
