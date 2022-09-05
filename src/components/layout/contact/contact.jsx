import React, {Component} from "react"
import $ from "jquery"
import axios from "axios"
import Aos from "aos"
import "aos/dist/aos.css"

  class Contact extends Component{

    state={
      form:{
        firstname:"",
        lastname:"",
        email:"",
        phone:""
      }
    }

    componentDidMount=()=>{
      $(".nav").css({'background-color' : '#fff'})
      window.scrollTo({top:0,behavior:"smooth"})
      Aos.init({
         duration: 1000,
         delay: 100,
       });

      axios.get("/admin/about").then(res=>{
          console.log(res.data);
      }).catch(e=>{
        console.log(e);
      })
    }

    onChangeHandler=(e)=>{
      let newState = {...this.state.form}
      newState[e.target.name] = e.target.value
      this.setState({
        form:{...newState}
      })
    }

    render(){

      return (
        <div className="contact">
             <div  className="heading__primary contact--contact">Contact Us</div>
             <video src="https://cdn.videvo.net/videvo_files/video/free/2019-12/small_watermarked/190915_B_02_HaLong_06_preview.webm" muted autoplay="true" loop></video>
             <div className="cover"></div>
             <div className="contactUs">
                   <forn className="contactUs__form" onSubmit={this.onSubmitHandler} >
                       <input onChange={this.onChangeHandler} className="contactUs__form_input" required name="firstname" value={this.state.form.firstname} placeholder="* First Name" type="text"/>
                       <input onChange={this.onChangeHandler}  className="contactUs__form_input" required name="lastname" value={this.state.form.lastname} placeholder="* Last Name" type="text"/>
                       <input onChange={this.onChangeHandler}  className="contactUs__form_input" required name="email" value={this.state.form.email} placeholder="* Email" type="email"/>
                       <input onChange={this.onChangeHandler}  className="contactUs__form_input" required name="phone" value={this.state.form.phone} placeholder="* Phone" type="tel"/>
                       <input value="GO"  className="contactUs__form_btn" type="submit"/>
                   </forn>
             </div>
        </div>
      )
    }
  }


 export default Contact;
