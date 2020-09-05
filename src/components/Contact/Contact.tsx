import React from "react";
import "./Contact.scss";
import Title from "../Title/Title";
import {
  Logo,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Telegram,
  Github,
} from "../../svgs/Svgs";

const iconSize = 24;

const socialIcons = [Facebook, Instagram, Twitter, Telegram, Github];

const Contact = () => (
  <div className="contact">
    <Title title="contacts" subtitle="Some ways for you to contact us" />
    <div className="content">
      <div className="left-container">
        <Logo size={136} />
        <p className="title">Direct Channels</p>
        <div className="row">
          <Phone size={iconSize} />
          <p>+509 1234 5678</p>
        </div>
        <div className="row">
          <Mail size={iconSize} />
          <p>support@techgear.io</p>
        </div>
        <p className="title">Social Media</p>
        <div className="social-icons">
          {socialIcons.map((Icon, index) => (
            <Icon size={iconSize} key={index} />
          ))}
        </div>
      </div>
      <div className="right-container">
        <p className="title">Feel free to send us your message</p>
        <div className="row">
          <input type="text" placeholder="Your name" />
          <input type="text" placeholder="Your email" />
        </div>
        <input type="text" placeholder="Subject" />
        <textarea rows={8} placeholder="Message" />
        <button>
          <p>submit</p>
        </button>
      </div>
    </div>
  </div>
);

export default Contact;
