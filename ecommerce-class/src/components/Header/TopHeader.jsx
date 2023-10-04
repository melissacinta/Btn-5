import { BsFacebook, BsInstagram } from "react-icons/bs";
import { MailIcon, PhoneIcon } from "../../utils/icons"
import {
  AiFillYoutube,
  AiOutlineTwitter,
} from 'react-icons/ai';

const topHeaderInfo = {
  contactInfo: [{ icon: PhoneIcon, text: "(225) 555-0118", link: "tel:+2255550118" },
  { icon: MailIcon, text: "michelle.rivera@example.com", link: "mailto:michelle.rivera@example.com" }
  ],
  text: "Follow Us  and get a chance to win 80% off",
  socials: [
    { icon: BsInstagram, link: "#" },
    { icon: AiFillYoutube, link: "#" },
    { icon: BsFacebook, link: "#" },
    { icon: AiOutlineTwitter, link: "#" }
  ]
}

const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="contact">
        {topHeaderInfo.contactInfo.map((item, i) =>
          <div key={i}>
            <a href={item.link}>
              <item.icon className="icons" />
              <span>{item.text}</span>
            </a>
          </div>
        )}
      </div>
      <p>{topHeaderInfo.text}</p>
      <div className="socials">
        <span>Follow Us: </span>
        <div>
          {topHeaderInfo.socials.map((item, i) => <item.icon key={i} className="icons social-icon" />)}
        </div>
      </div>
    </div>
  )
}

export default TopHeader
