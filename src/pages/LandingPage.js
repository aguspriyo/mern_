/* eslint-disable no-undef */
import landingPage from "json/landingPage.json";
import Categories from "parts/Categories";
import Footer from "parts/Footer";
import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Testimony from "parts/Testimony";
import React, { Component } from "react";

export default class LandingPage extends Component {
  constructor(props){
    super(props);
    this.refMostPicked = React.createRef()
  }
  componentDidMount(){
    window.title = "Staycation | Home"
    window.scrollTo(0,0)
  }
  render(){
// console.log(this.props);

  return (
    <>

    <Header {...this.props}></Header>
    <Hero refMostPicked={this.refMostPicked} data={landingPage.hero}/>
    <MostPicked refMostPicked ={this.refMostPicked} data={landingPage.mostPicked}/>
    <Categories data={landingPage.categories}/>
    <Testimony data={landingPage.testimonial}/>
    <Footer/>


    </>
  )
}
}
