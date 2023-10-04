import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="logo-box">
        <span className="logo">Bandage</span>
        <div className="footer-icons">
          {socials.map((item, i) => <item.icon key={i} className="icon-primary" />)}
        </div>
      </div>
      <div className="quick-links">
        {footerLinks.map((link, i) => (
          <div key={i}>
            <h4 className="section-heading">{link.name}</h4>
            <ul>
              {link.links.map((item, i) => <li key={i}><a href={item.href}>{item.name}</a></li>)}
            </ul>
          </div>
        ))}
        <div>
          <h4 className="section-heading">Get In Touch</h4>
          <form>
            <div>
              <input type="text" placeholder="Your Email" />
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

const footerLinks = [
  {
    name: "Company Info",
    links: [
      { name: "About Us", href: "#" },
      { name: "Carrier", href: "#" },
      { name: "We are hiring", href: "#" },
      { name: "Blog", href: "#" }
    ]
  },
  {
    name: "Legal",
    links: [
      { name: "About Us", href: "#" },
      { name: "Carrier", href: "#" },
      { name: "We are hiring", href: "#" },
      { name: "Blog", href: "#" }
    ]
  },
  {
    name: "Features",
    links: [
      { name: "Business Marketing", href: "#" },
      { name: "User Analytic", href: "#" },
      { name: "Live Chat", href: "#" },
      { name: "Unlimited Support", href: "#" }
    ]
  },
  {
    name: "Resources",
    links: [
      { name: "IOS & Android", href: "#" },
      { name: "Watch a Demo", href: "#" },
      { name: "Customers", href: "#" },
      { name: "API", href: "#" }
    ]
  }
]

export default Footer;
