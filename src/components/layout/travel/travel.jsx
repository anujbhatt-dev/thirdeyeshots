import React, {Component} from "react"
import $ from "jquery"
import axios from "axios"
import Aos from "aos"
import "aos/dist/aos.css"

  class Travel extends Component{

    componentDidMount=()=>{
      $(".nav").css({'background-color' : '#fff'})
      // window.scrollTo({top:0,behavior:"smooth"})
      // Aos.init({
      //    duration: 1000,
      //    delay: 100,
      //  });

      // axios.get("/admin/about").then(res=>{
      //     console.log(res.data);
      // }).catch(e=>{
      //   console.log(e);
      // })
    }

    render(){

      return (
         <div className="shop">
            Travel with us soon!!!!!
         </div>
      )
    }
  }


 export default Travel;
