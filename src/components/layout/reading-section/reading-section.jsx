import React, {Component} from "react"
import screen1 from "../../../assets/images/john-towner-JgOeRuGD_Y4-unsplash.jpg"
import poems from "../../../assets/images/d-a-v-i-d-s-o-n-l-u-n-a-uzZGI9XwKyE-unsplash.jpg"
import tips from "../../../assets/images/sam-dan-truong--rF4kuvgHhU-unsplash.jpg"
import facts from "../../../assets/images/vadim-sadovski-AH7oKSGbvYE-unsplash.jpg"
import travel_stories from "../../../assets/images/linus-sandvide-5DIFvVwe6wk-unsplash.jpg"
import blogs from "../../../assets/images/aiony-haust-3TLl_97HNJo-unsplash.jpg"

// import video1 from "../../../assets/videos/video-reading-section.mp4"
import {Link} from "react-router-dom"
import $ from "jquery";

import Aos from "aos"
import "aos/dist/aos.css"

class ReadingSection extends Component{

    state={

    }

    componentDidMount=()=>{
      window.scrollTo({top:0,behavior:"smooth"})
      $(".nav").css({'background-color' : '#fff'})
      Aos.init({
         duration: 2000,
         delay: 100,
       });
    }

    componentDidUpdate=()=>{
      Aos.init({
         duration: 2000,
         delay: 100,
       });
    }

    render(){

      return (
        <div className="readingSection">
            <div data-aos="zoom-out" data-aos-once={true} className="readingSection__screen1">
                 <img src={screen1} alt="john-towner-JgOeRuGD_Y4-unsplash"/>
                 <div className="readingSection__screen1_thought">
                     You don’t need magic to disappear<br/>All you need is a destination
                 </div>
            </div>
            <div className="readingSection__nav">
                <div className="readingSection__nav_1">
                  <img src={blogs} alt="aiony-haust-3TLl_97HNJo-unsplash"/>
                  <div className="readingSection__nav_qoute"><sup><i class="fa fa-quote-left" aria-hidden="true"></i></sup>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis odit, at asperiores nobis numquam laborum.<sup><i class="fa fa-quote-right" aria-hidden="true"></i></sup></div>
                  <div className="readingSection__nav_dest">Blogs</div>
                </div>
                <div className="readingSection__nav_2">
                  <img src={facts} alt="vadim-sadovski-AH7oKSGbvYE-unsplash"/>
                  <div className="readingSection__nav_qoute"><sup><i class="fa fa-quote-left" aria-hidden="true"></i></sup>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis odit, at asperiores nobis numquam laborum.<sup><i class="fa fa-quote-right" aria-hidden="true"></i></sup></div>
                  <div className="readingSection__nav_dest">Facts</div>
                </div>
                <div className="readingSection__nav_3">
                    <img src={poems} alt="d-a-v-i-d-s-o-n-l-u-n-a-uzZGI9XwKyE-unsplash"/>
                    <div className="readingSection__nav_qoute"><sup><i class="fa fa-quote-left" aria-hidden="true"></i></sup>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis odit, at asperiores nobis numquam laborum.<sup><i class="fa fa-quote-right" aria-hidden="true"></i></sup></div>
                    <div className="readingSection__nav_dest">Poems</div>
                </div>
                <div className="readingSection__nav_4">
                    <img src={travel_stories} alt="linus-sandvide-5DIFvVwe6wk-unsplash"/>
                    <div className="readingSection__nav_qoute"><sup><i class="fa fa-quote-left" aria-hidden="true"></i></sup>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis odit, at asperiores nobis numquam laborum.<sup><i class="fa fa-quote-right" aria-hidden="true"></i></sup></div>
                    <div className="readingSection__nav_dest">Travel Stories</div>
                </div>
                <div className="readingSection__nav_5">
                    <img src={tips} alt="sam-dan-truong--rF4kuvgHhU-unsplash"/>
                    <div className="readingSection__nav_qoute"><sup><i class="fa fa-quote-left" aria-hidden="true"></i></sup>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis odit, at asperiores nobis numquam laborum.<sup><i class="fa fa-quote-right" aria-hidden="true"></i></sup></div>
                    <div className="readingSection__nav_dest">Tips</div>
                </div>
            </div>
        </div>
      )
    }
  }


 export default ReadingSection;
