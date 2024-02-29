import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <ul className="footer__categories">
        <li><Link to="/posts/categories/:Rust">Rust</Link></li>
        <li><Link to="/posts/categories/:Python">Python</Link></li>
        <li><Link to="/posts/categories/:WebDev">Web Dev</Link></li>
        <li><Link to="/posts/categories/:SiteReliability">Site Reliability</Link></li>
        <li><Link to="/posts/categories/:SystemDesign">System Design</Link></li>
        <li><Link to="/posts/categories/:Concepts">Concepts</Link></li>
      </ul>
      <div className="footer__social">
        <a href="https://github.com/Kernel-rb"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/saif-matab/"><FaLinkedin /></a>
        <a href="https://www.youtube.com/@kernelrb"><FaYoutube /></a>
        <a href="https://twitter.com/0xkernel_rs"><FaXTwitter /></a>
      </div>
    </footer>
  )
}

export default Footer