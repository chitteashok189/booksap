import React from "react";
import axios from "axios";
import Users from "./Users";
import "./App.css"
class App extends React.Component{
  constructor(){
    super();
    this.state={
      user:[]
    }
  }
  componentDidMount(){
    axios.get("https://run.mocky.io/v3/f3feef1c-9bfa-43fd-b2a0-bbe9abadb4f6").then(
      response=>{
        this.setState({user:response.data.clients})
      }
    )
  }
  render(){
    return( 
      <div>
      
        <Users updateList={this.state.user}/>
      </div>
    )
  }
}
export default App;