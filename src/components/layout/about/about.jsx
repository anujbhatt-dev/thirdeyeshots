import React, {Component} from "react"
import about from "../../../assets/images/undraw_adventure_4hum.svg"
import about2 from "../../../assets/images/undraw_navigator_a479.svg"
import anuj from "../../../assets/images/anuj.png"
import aaditya from "../../../assets/images/aaditya.png"
import $ from "jquery"
import axios from "axios"
import Aos from "aos"
import "aos/dist/aos.css"

  class About extends Component{

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


    render(){

      return (  <>
        <div className="about">
            <div className="heading__primary">About Us</div>
            <div data-aos="slide-right" data-aos-once={true} className="about_row">
                <div className="about_row-col1">
                     <h3>Why we started</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit laborum natus impedit tempora sint omnis est molestiae accusamus ut, tenetur laboriosam ad quod ab quo voluptatibus animi ducimus expedita maxime illum fugiat esse magni. Soluta, minima eligendi cumque, illo in quia minus saepe. Aspernatur aliquid porro quis molestias ullam dolorem?<br/><br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste delectus dignissimos, fugiat non error odio possimus quaerat enim dolorum, alias dolores molestias est illum totam vel ex quod obcaecati beatae rem perferendis ad rerum voluptas! Obcaecati fugit eum praesentium eligendi necessitatibus eos ipsam magni voluptatibus ad facere dolor neque amet nesciunt earum consequuntur atque quas voluptatem voluptatum porro corporis, quidem, error unde perspiciatis officia! Quia eaque suscipit reprehenderit, sapiente eveniet autem! Labore quod magnam assumenda.</p>
                </div>
                <div className="about_row-col2">
                     <img className="about_row-col2-image" src={about} alt="aaditya_bhatt"/>
                </div>
            </div>
            <hr className="hr"/>
            <div data-aos="slide-left" data-aos-once={true} className="about_row about_row-even">
                <div className="about_row-col2">
                     <img className="about_row-col2-image" src={about2} alt="aaditya_bhatt"/>
                </div>
                <div className="about_row-col1">
                     <h3>Why we started</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit laborum natus impedit tempora sint omnis est molestiae accusamus ut, tenetur laboriosam ad quod ab quo voluptatibus animi ducimus expedita maxime illum fugiat esse magni. Soluta, minima eligendi cumque, illo in quia minus saepe. Aspernatur aliquid porro quis molestias ullam dolorem?<br/><br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste delectus dignissimos, fugiat non error odio possimus quaerat enim dolorum, alias dolores molestias est illum totam vel ex quod obcaecati beatae rem perferendis ad rerum voluptas! Obcaecati fugit eum praesentium eligendi necessitatibus eos ipsam magni voluptatibus ad facere dolor neque amet nesciunt earum consequuntur atque quas voluptatem voluptatum porro corporis, quidem, error unde perspiciatis officia! Quia eaque suscipit reprehenderit, sapiente eveniet autem! Labore quod magnam assumenda.</p>
                </div>
            </div>
            <hr className="hr"/>
        </div>
        <div data-aos="fade" data-aos-once={true} className="team">
            <div  className="heading__primary">Core Team</div>
            <div className="team_row">
                <figure className="team_row-col1">
                     <img src={anuj} alt="ANUJ BHATT"/>
                     <figcaption>
                         <h6>ANUJ BHATT</h6>
                         <p>Lorem ipsum dolor</p>
                     </figcaption>
                </figure>
                <figure className="team_row-col2">
                    <img src={aaditya} alt="AADITYA BHATT"/>
                    <figcaption>
                        <h6>AADITYA BHATT</h6>
                        <p>Lorem ipsum dolor</p>
                    </figcaption>
                </figure>
            </div>
        </div>
        </>
      )
    }
  }


 export default About;
