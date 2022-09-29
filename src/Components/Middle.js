import React from "react";
import "./Mid.css";
import {
  FaBeer,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
export default function Middle() {
  return (
    <div className="mid">
      <h1> HELMI ABBASSI</h1>
      <h3>Software Enegineer</h3>
      <p className="website">www.helmiabbassi.com</p>
      <div> 
        <a href="https://www.linkedin.com/in/helmi-abbassi/" target="_blank">
        <button className="button1"  >
          <h4>LinkedIn</h4>
          <FaLinkedin className="iconcenter"></FaLinkedin>

        </button></a>
      </div>
      <h4 className="aboutme"> About Me</h4>
      <div className="about">
            <p className="about">
              {" "}
              Hello! I’m Helmi Abbassi.I am a computer science graduate with a
              passion for developing scalable web applications with one year of
              experience in both front-end and back-end development with
              versatility in multiple development stacks and having development
              experience with Spring boot and node( EXpress JS,NestJs) for the
              backend ,Angular and React for the frontend, and MongoDB and MySql
              for the database.
            </p>
          </div>
    </div>
  );
}
