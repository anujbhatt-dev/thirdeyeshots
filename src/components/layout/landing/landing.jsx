import React, {Component} from "react"
import ab from "../../../assets/images/aaditya_bhatt.jpeg"
import penizgunInsta from "../../../assets/images/penizgunInsta.jpg"
import di from "../../../assets/images/aiony-haust-3TLl_97HNJo-unsplash.jpg"
import LandingProduct from "./product/product"

import $ from "jquery"
import axios from "axios"
import Aos from "aos"
import "aos/dist/aos.css"

class Landing extends Component{

    state={
      form:{
        firstname:"",
        lastname:"",
        email:"",
        phone:""
      },
      about:{
        title:"",
        para1:"",
        para2:"",
        para3:"",
      }
    }

    componentDidMount=()=>{
      $(".nav").css({'background-color' : 'transparent'})
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

     $(".landing__doubleImage").mousemove((e)=>{
         console.log(document.querySelector('.landing__doubleImage').offsetWidth);
         const width = document.querySelector('.landing__doubleImage').offsetWidth;
         console.log(width);
         if(e.clientX<=(width/2)){
           document.querySelector('.landing__doubleImage_2').style.clipPath= `polygon(0 0, 90%  0, 90% 100%, 0% 100%)`
         }else{
           document.querySelector('.landing__doubleImage_2').style.clipPath= `polygon(0 0, 10%  0, 10% 100%, 0% 100%)`
         }
     })
     // $('.landing__doubleImage_2').mouseover(()=>{
     //    document.querySelector('.landing__doubleImage_2').style.clipPath= `polygon(0 0, 90%  0, 90% 100%, 0% 100%)`
     // })
     // $('.landing__doubleImage_1').mouseover(()=>{
     //    document.querySelector('.landing__doubleImage_2').style.clipPath= `polygon(0 0, 10%  0, 10% 100%, 0% 100%)`
     // })
     $(".landing__doubleImage").mouseleave((e)=>{
         document.querySelector('.landing__doubleImage_2').style.clipPath= `polygon(0 0, 50%  0, 50% 100%, 0% 100%)`
     })

    }

    componentDidUpdate=()=>{
      Aos.init({
         duration: 1000,
         delay: 100,
       });
    }

    render(){

      return (
            <div className="landing">

                 <div className="landing__firstView">
                    <div className="landing__firstView_col1">
                        <div data-aos="flip-down" className="landing__firstView_col1-head">
                        Traveling heals your soul<br/>And strengthen your mind
                        {
                          // this.state.landingScreen1
                        }
                        </div>
                        <img className="landing__firstView_col1-img" src={di} alt=""/>
                        <div className="landing__firstView_col1-btn">
                            <button data-aos="fade-up">Travel with Penizgun</button>
                        </div>
                    </div>
                    <div className="landing__firstView_col2">
                            <img data-aos="slide-left" className="landing__firstView_col2-image" src={di} alt="aaditya_bhatt"/>
                    </div>
                </div>

                {
                     // cube
                }
                <div className="landing__socialMedia_head landing__socialMedia_head--middle" style={{marginTop:"2rem"}}>Products</div>
                <div className="landing__cube">
                    <div className="landing__cube_area">
                       <div className="landing__cube_area-box landing__cube_area-front"><LandingProduct t="t1"/></div>
                       <div className="landing__cube_area-box landing__cube_area-right"><LandingProduct t="t2"/></div>
                       <div className="landing__cube_area-box landing__cube_area-back"><LandingProduct t="t3"/></div>
                       <div className="landing__cube_area-box landing__cube_area-left"><LandingProduct t="t4"/></div>
                       <div className="landing__cube_area-box landing__cube_area-top"></div>
                       <div className="landing__cube_area-box landing__cube_area-bottom"></div>
                    </div>
                </div>
                <i class="fa fa-ellipsis-h horizontalDots" aria-hidden="true"></i>

               {
                 // doubleImage
               }
                <div className="landing__doubleImageWrapper">
                <div className="landing__doubleImage">
                   <div className="landing__doubleImage_1">
                      <img  src={di} alt="aiony-haust-3TLl_97HNJo-unsplash"/>
                      <div onClick={()=>{alert("hello")}}>Blogs</div>
                   </div>
                   <div className="landing__doubleImage_2">
                      <img  src={di} alt="aiony-haust-3TLl_97HNJo-unsplash"/>
                      <div onClick={()=>{alert("world")}}>Poems</div>
                   </div>
                </div>
                  <div className="landing__poem">
                    <div className="landing__poem_title">
                            lorem Ipsum
                    </div>
                    <div className="landing__poem_lines">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quibusdam explicabo ducimus nostrum nihil odit omnis nulla quia, provident eum laborum harum beatae aliquid, quos natus! Quisquam pariatur id nesciunt.
                    </div>
                    <div className="landing__poem_lines">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quibusdam explicabo ducimus nostrum nihil odit omnis nulla quia, provident eum laborum harum beatae aliquid, quos natus! Quisquam pariatur id nesciunt.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quibusdam explicabo ducimus nostrum nihil odit omnis nulla quia, provident eum laborum harum beatae aliquid, quos natus! Quisquam pariatur id nesciunt.
                    </div>
                    <div className="landing__poem_lines">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quibusdam explicabo ducimus nostrum nihil odit omnis nulla quia, provident eum laborum harum beatae aliquid, quos natus! Quisquam pariatur id nesciunt.
                    </div>
                    <div className="landing__poem_by">
                            By <strong>Lorem ipsum</strong>
                    </div>
                  </div>
                </div>

                <i class="fa fa-ellipsis-h horizontalDots" aria-hidden="true"></i>

                {
                  // social media
                }
                <div className="landing__socialMedia">
                        <div className="landing__socialMedia_head landing__socialMedia_head--right">Instagram</div>
                        <div className="landing__socialMedia_instagram">
                           <div className="landing__socialMedia_instagram-circle"></div>
                           <img className="landing__socialMedia_instagram-img" src={penizgunInsta} alt="penizgunInsta"/>
                           <div className="landing__socialMedia_instagram-grid">
                               <div className="landing__socialMedia_instagram-grid_item landing__socialMedia_instagram-grid_1"><img  src={di} alt="aiony-haust-3TLl_97HNJo-unsplash"/></div>
                               <div className="landing__socialMedia_instagram-grid_item landing__socialMedia_instagram-grid_2"><img  src={di} alt="aiony-haust-3TLl_97HNJo-unsplash"/></div>
                               <div className="landing__socialMedia_instagram-grid_item landing__socialMedia_instagram-grid_3"><img  src={di} alt="aiony-haust-3TLl_97HNJo-unsplash"/></div>
                               <div className="landing__socialMedia_instagram-grid_item landing__socialMedia_instagram-grid_4"><img  src={di} alt="aiony-haust-3TLl_97HNJo-unsplash"/></div>
                               <div className="landing__socialMedia_instagram-grid_item landing__socialMedia_instagram-grid_5"><img  src={di} alt="aiony-haust-3TLl_97HNJo-unsplash"/></div>
                               <div className="landing__socialMedia_instagram-grid_item landing__socialMedia_instagram-grid_6"><img  src={di} alt="aiony-haust-3TLl_97HNJo-unsplash"/></div>
                               <div className="landing__socialMedia_instagram-grid_item landing__socialMedia_instagram-grid_7"><img  src={di} alt="aiony-haust-3TLl_97HNJo-unsplash"/></div>
                               <div className="landing__socialMedia_instagram-grid_item landing__socialMedia_instagram-grid_8"><img  src={di} alt="aiony-haust-3TLl_97HNJo-unsplash"/></div>
                           </div>
                        </div>

                        <i class="fa fa-ellipsis-h horizontalDots" aria-hidden="true"></i>

                        <div className="landing__socialMedia_head landing__socialMedia_head--left">youtube</div>
                        <div className="landing__socialMedia_youtube">
                           <div className="landing__socialMedia_youtube-circle"></div>
                           <iframe className="landing__socialMedia_youtube-iframe" src="https://www.youtube.com/embed/BlJKm9bwoEI?autoplay=0&mute=0" frameborder="0" allow='autoplay; encrypted-media' allowFullScreen/>
                        </div>

                        <i class="fa fa-ellipsis-h horizontalDots" aria-hidden="true"></i>

                        <div className="landing__socialMedia_head landing__socialMedia_head--right">Facebook</div>
                        <div className="landing__socialMedia_instagram">
                           <div className="landing__socialMedia_instagram-circle"></div>
                           <img className="landing__socialMedia_instagram-img" src={penizgunInsta} alt="penizgunInsta"/>
                        </div>

                        <i class="fa fa-ellipsis-h horizontalDots" aria-hidden="true"></i>

                        <div className="landing__socialMedia_head landing__socialMedia_head--middle">connect with us</div>
                        <div className="landing__socialMedia_icons">
                           <div className="landing__socialMedia_instagram-circle"></div>
                           <a rel="noopener noreferrer" target="_blank" href="https://www.google.com">{""}<i class="fa fa-instagram" aria-hidden="true"></i></a>
                           <a rel="noopener noreferrer" target="_blank" href="https://www.google.com">{""}<i class="fa fa-youtube" aria-hidden="true"></i></a>
                           <a rel="noopener noreferrer" target="_blank" href="https://www.google.com">{""}<i class="fa fa-facebook" aria-hidden="true"></i></a>
                        </div>
                </div>

            </div>
      )
    }
  }


 export default Landing;
