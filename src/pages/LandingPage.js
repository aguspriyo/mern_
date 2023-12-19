import Header from "parts/Header";
import { Component } from "react";


export default class LandingPage extends Component {
  render(){
console.log(this.props);

  return (
    <>
    <Header {...this.props}>

    </Header>
    </>
  )
}
}
