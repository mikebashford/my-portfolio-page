import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";

export default async function Footer() {
  return (
    <footer>
      <a href="/" className="footer__logo">
        Mike Bashford
      </a>
      <ul className="permalinks">
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/experience">Experience</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com">
          <BsTwitter />
        </a>
        <a href="https://github.com">
          <BsGithub />
        </a>
        <a href="https://linkedin.com">
          <BsLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Michael Bashford. All rights reserved.</small>
      </div>
    </footer>
  );
}
