import React from "react";
import "./Footer.css";
import { FaBeer, FaInstagram, FaFacebook, FaTwitter,FaYoutube } from "react-icons/fa";
export default function Footer() {
  return (<>
    <div className="footer">
       <a href="https://www.facebook.com/helmii.abbassi/" target="_blank"><FaFacebook className="icon"/></a> 
        <FaInstagram className="icon"/>
       <a href="https://twitter.com/HelmiAbbassii" target="_blank"> <FaTwitter className="icon"/></a>
        <FaYoutube className="icon"/>

        
    
    </div>
    </>
  );
}
