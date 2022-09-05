import React, {Component} from "react"
import t1 from "../../../../assets/images/t1.png"
import t2 from "../../../../assets/images/t2.png"
import t3 from "../../../../assets/images/t3.png"
import t4 from "../../../../assets/images/t4.png"

  class LandingProduct extends Component{

    render(){

      return (
         <div className="landingProduct">
             <img className="landingProduct__img" src={this.props.t==="t1"?t1:this.props.t==="t2"?t2:this.props.t==="t3"?t3:t4} alt=""/>
             <button className="landingProduct__btn">Quick View</button>
         </div>
      )
    }
  }


 export default LandingProduct;
