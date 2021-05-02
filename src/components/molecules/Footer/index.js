import React from "react"
import { IcGithub, IcInstagram } from "../../../assets"
import "./footer.scss"

const Footer = () => {
  const Icon = ({ img }) => {
    return (
      <div className="icon-wrapper">
        <img className="icon-medsos" src={img} alt="icon" />
      </div>
    )
  }
  return (
    <div>
      <div className="footer">
        <div>
          <p className="logo">MERN Blog</p>
        </div>
        <div className="social-wrapper">
          <Icon img={IcGithub} />
          <Icon img={IcInstagram} />
        </div>
      </div>
      <div className="copyright">
        <p>copyright</p>
      </div>
    </div>
  )
}

export default Footer
