/* eslint-disable no-undef */
import landingPage from "json/landingPage.json";
import Categories from "parts/Categories";
import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import React, { Component } from "react";

export default class LandingPage extends Component {
  constructor(props){
    super(props);
    this.refMostPicked = React.createRef()
  }
  render(){
// console.log(this.props);

  return (
    <>
    <Header {...this.props}></Header>
    <Hero refMostPicked={this.refMostPicked} data={landingPage.hero}/>
    <MostPicked refMostPicked ={this.refMostPicked} data={landingPage.mostPicked}/>
    <Categories data={landingPage.categories}/>
    </>
  )
}
}
