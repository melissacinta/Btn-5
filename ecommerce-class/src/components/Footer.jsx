import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { footerLinks } from "../utils/mockData";
import { useState } from "react";
import PropTypes from "prop-types"

const Footer = ({ bgColor }) => {
  const [email, setEmail] = useState("")
  return (
    <footer>
      <div className={`logo-box ${bgColor}`}>
        <div className="logo-box-inner">
          <span className="logo">Bandage</span>
          <div className="footer-icons">
            {socials.map((item, i) => <item.icon key={i} className="icon-primary" />)}
          </div>
        </div>
        <hr />
      </div>
      <div className="quick-links">
        {footerLinks.map((group, i) => (
          <div key={i}>
            <h4 className="section-heading">{group.name}</h4>
            <ul>
              {group.links.map((item, i) => <li key={i}><a href={item.href}>{item.name}</a></li>)}
            </ul>
          </div>
        ))}
        <div>
          <h4 className="section-heading">Get In Touch</h4>
          <form onSubmit={(e) => { e.preventDefault() }}>
            <div>
              <input type="email" placeholder="Your Email" value={email} onChange={(e) => {
                setEmail(e.target.value)
                console.log(e.target.value)
              }} />
              <button type="submit" onClick={() => console.log(email)}>Subscribe</button>
            </div>
            <p>Lore imp sum dolor Amit</p>
          </form>
        </div>
      </div>
      <div className="copyright">
        <span>
          Made With Love By
        </span>
        <span>
          Finland All Right Reserved
        </span>
      </div>
    </footer>
  );
}
const socials = [
  { icon: BsFacebook, link: "#" },
  { icon: AiOutlineInstagram, link: "#" },
  { icon: AiOutlineTwitter, link: "#" }
]

Footer.propTypes = {
  bgColor: PropTypes.string
}

export default Footer;
