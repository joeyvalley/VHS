import "../styles/footer.css"

import { FaSpotify, FaYoutube, FaSoundcloud, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { IoLogoTiktok } from 'react-icons/io5';


export default function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <FaInstagram size="1.25rem" />
        </li>
        <li>
          <IoLogoTiktok size="1.25rem" />
        </li>
        <li>
          <FaSpotify size="1.25rem" />
        </li>
        <li>
          <FaYoutube size="1.25rem" />
        </li>
        <li>
          <FaFacebookF size="1.25rem" />
        </li>
        <li>
          <FaSoundcloud size="1.25rem" />
        </li>
      </ul>

    </div>
  )
}