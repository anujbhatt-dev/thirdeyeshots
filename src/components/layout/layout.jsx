import React, {Component} from "react"
import {Switch , Route} from "react-router-dom"
import Nav from "./nav/nav"
import Landing from "./landing/landing"
import ReadingSection from "./reading-section/reading-section"
import About from "./about/about"
import Footer from "./footer/footer"
import Contact from "./contact/contact"
import Shop from "./shop/shop"
import Travel from "./travel/travel"

//fixed
import SocialMedia from "./fixed/social-media/social-media"
import NavSmallScreen from "./fixed/nav-small-screen/nav-small-screen"

 class Layout extends Component{

   render(){

     return (
         <div  className="layout">
             <SocialMedia />
             <Switch>
                 <Route exact path="/">
                      <Nav/>
                      <Landing/>
                      <Footer/>
                      <NavSmallScreen />
                 </Route>
                 <Route exact path="/blogs">
                      <Nav/>
                      <ReadingSection/>
                      <Footer/>
                      <NavSmallScreen />

                 </Route>
                 <Route exact path="/about">
                       <Nav/>
                      <About/>
                      <Footer/>
                      <NavSmallScreen />
                 </Route>
                 <Route exact path="/contact">
                       <Nav/>
                      <Contact/>
                      <Footer/>
                      <NavSmallScreen />
                 </Route>
                 <Route exact path="/shop">
                       <Nav/>
                      <Shop/>
                      <Footer/>
                      <NavSmallScreen />
                 </Route>
                 <Route exact path="/travel">
                       <Nav/>
                      <Travel/>
                      <Footer/>
                      <NavSmallScreen />
                 </Route>
             </Switch>
         </div>
     )
   }
 }


export default Layout;
