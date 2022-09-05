import React, {Component} from "react"
import {Link} from "react-router-dom"

  class NavSmallScreen extends Component{

    state={
      toggle:false
    }

    toggleHandler=()=>{
      this.setState({
        toggle:!this.state.toggle
      })
    }



    render(){

      return (<>
           <div onClick={this.toggleHandler} className="navSmallScreen__toggler">{this.state.toggle?<i className="fa fa-times" aria-hidden="true"></i>:<i className="fa fa-bars" aria-hidden="true"></i>}</div>
           {this.state.toggle?<div className="navSmallScreen">
               <Link onClick={this.toggleHandler} to="/" className="navSmallScreen__item navSmallScreen__house">House</Link>
               <Link onClick={this.toggleHandler} to="/shop" className="navSmallScreen__item navSmallScreen__shop">Shop</Link>
               <Link onClick={this.toggleHandler} to="/blogs" className="navSmallScreen__item navSmallScreen__readingSection">reading section</Link>
               <Link onClick={this.toggleHandler} to="/travel" className="navSmallScreen__item navSmallScreen__travel">travel</Link>
               <Link onClick={this.toggleHandler} to="/about" className="navSmallScreen__item navSmallScreen__about">About</Link>
               <Link onClick={this.toggleHandler} to="/contact" className="navSmallScreen__item navSmallScreen__contact">contact</Link>
           </div>:null}
           </>
      )
    }
  }


 export default NavSmallScreen;
