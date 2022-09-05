import React, {Component} from "react"
import {Link} from "react-router-dom"
import $ from "jquery";
import penizgun_logo from "../../../assets/images/penizgun_logo.png"

class Nav extends Component{


   componentDidMount=()=>{
      $(window).scroll(this.scrollHandler);
      $(".nav").css({'background-color' : 'transparent'})
   }

   scrollHandler=()=>{
      const pageTop = $(window).scrollTop();
      if(pageTop>=0 && pageTop<=($(".landing__firstView").height())){
        $(".nav").css({'background-color' : 'transparent'})
      }else{
        $(".nav").css({'background-color' : '#fff'})
      }
   }


   render(){

     return (
         <div className="nav">
              <div className="nav__brand">
                 {
                   // <img className="nav__brand--penizgun_logo" src={penizgun_logo} alt="penizgun_logo"/>
                 }
                 <div className="nav__brand--name">penizgun</div>
              </div>
              <div className="nav__list">
                 <Link to="/" className="nav__list_item">House</Link>
                 <Link to="/shop" className="nav__list_item">Shop</Link>
                 <Link to="/blogs" className="nav__list_item">reading section</Link>
                 <Link to="/travel" className="nav__list_item">travel</Link>
                 <Link to="/about" className="nav__list_item">About</Link>
                 <Link to="/contact" className="nav__list_item">contact</Link>
              </div>

         </div>
     )
   }
 }


export default Nav;
