import { FaSpotify, FaYoutube, FaSoundcloud, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { IoLogoTiktok } from 'react-icons/io5';

export default function Artist() {
  return (
    <div className="splash">
      <div className="splash-logo">
        <img src="/1.jpg" alt="Header Logo" />
      </div>
      <div className="splash-menu">
        <ul>
          <li className="icon">
            <a href="https://www.instagram.com/vhsound" target="_blank"><FaInstagram size="2rem" /></a>
          </li>
          <li className="icon">
            <a href="https://www.youtube.com/@VinegarHillSound
" target="_blank"><FaYoutube size="2rem" /></a>
          </li>
          <li className="icon">
            <a href="https://open.spotify.com/album/01pUXrKhkS3BkoArcDJCVt?si=y_ybN2LRQbCbtRvrARstKg" target="_blank"><FaSpotify size="2rem" /></a>
          </li>
          <li className="text">
            <a href="https://www.vinegarhillsound.com" target="_blank">Studio</a>
          </li>
        </ul>
      </div>
    </div>
  )
}