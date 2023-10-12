import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { footerLinks } from "../utils/mockData";
import { useState } from "react";

const Footer = () => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "hello@me.com"
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formDetails)
  }
  return (
    <footer>
      <div className="logo-box">
        <span className="logo">Bandage</span>
        <div className="footer-icons">
          {socials.map((item, i) => <item.icon key={i} className="icon-primary" />)}
        </div>
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
          <form onSubmit={handleSubmit}>
            <div>
              <input type="email" placeholder="Your Email" value={formDetails.email} onChange={(e) => {
                setFormDetails({ ...formDetails, email: e.target.value })
              }} />
              <input type="text" placeholder="Your name" value={formDetails.name} onChange={(e) => {
                setFormDetails({ ...formDetails, name: e.target.value })
              }} />
              <button type="submit">Subscribe</button>
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



export default Footer;
