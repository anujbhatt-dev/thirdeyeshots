import React, {Component} from "react"


  class SocialMedia extends Component{

    render(){

      return (
          <div className="socialMedia">
              <a className="socialMedia__item socialMedia__youtube" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">{""}<i class="fa fa-youtube" aria-hidden="true"></i></a>
              <a className="socialMedia__item socialMedia__instagram" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">{""}<i class="fa fa-instagram" aria-hidden="true"></i></a>
              <a  className="socialMedia__item socialMedia__facebook" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">{""}<i class="fa fa-facebook" aria-hidden="true"></i></a>
          </div>
      )
    }
  }


 export default SocialMedia;
