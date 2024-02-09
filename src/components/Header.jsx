import '../styles/header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src="/header.png" alt="Header Logo" />
      </div>
      <ul>
        <li className="link">About</li>
        <li>/</li>
        <li className="link">Artists</li>
        <li>/</li>
        <li className="link">Studio</li>
        <li>/</li>
        <li className="link">Video</li>
        <li>/</li>
        <li className="link">Contact</li>
      </ul>
    </div>
  )
}