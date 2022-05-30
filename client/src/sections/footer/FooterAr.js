import React from 'react'
import './footer.css'
import Logo from '../../assets/logoWhite.png'
import { FaFacebookF, FaTwitter, FaTiktok, FaYoutube, FaInstagram, FaCopyright } from "react-icons/fa";

const FooterAr = () => {
  return (
    <footer className="footer-container">
      <div className="footer-heading">
        <img src={Logo} />
      </div>
      <h1 style={{fontFamily: "var(--font-family-arabic)"}}>العلامة الكاملة</h1>
      <div className="social-media">
        <h2 style={{fontFamily: "var(--font-family-arabic)"}}>تواصل معنا</h2>
        <div className="social-media-icons">
          <a href="https://www.facebook.com/%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D9%85%D8%A9-%D8%A7%D9%84%D9%83%D8%A7%D9%85%D9%84%D8%A9-%D9%84%D9%84%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8-%D9%88-%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA-103506852205896/" target="_blank">
            <FaFacebookF style={{color: "white"}} />
          </a>
          <a href="https://twitter.com/AlalamahAlkamla" target="_blank">
            <FaTwitter style={{color: "white"}} />
          </a>
          {/* <a>
            <FaTiktok style={{color: "white"}} />
          </a> */}
          <a href="https://www.youtube.com/channel/UCimYogmifKrScTGclGE5Zcg" target="_blank">
            <FaYoutube style={{color: "white"}} />
          </a>
          <a href="https://www.instagram.com/alalamahalkamla/" target="_blank">
            <FaInstagram style={{color: "white"}} />
          </a>
        </div>
      </div>
      <div className="footer-credits">
        <FaCopyright style={{color: "white"}} /> 
        <h2>Created By: Edu Creative Group</h2>
      </div>
    </footer>
  )
}

export default FooterAr