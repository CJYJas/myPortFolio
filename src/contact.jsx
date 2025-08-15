import { Link } from "react-router-dom";
import './css/contact.css'
import githublogo from './github.png';
import linkedInlogo from './linkedin.png';
import instlogo from './inst.jpg';

function Contact() {
    const contactList = [
        {label: "Github" , path: "https://github.com/CJYJas", icon: githublogo},
        {label: "LinkedIn", path: "https://www.linkedin.com/in/jasminechin0627/", icon:linkedInlogo},
        {label: "Instagram", path: "https://www.instagram.com/jasminecjy06/?hl=en", icon:instlogo}
    ]

    const contactButton = {label: "Contact Me", path:"mailto:jasminecjy06@gmail.com"}

    return(
        <div className="contact">
            <nav>
                {contactList.map((item, index) =>(
                    <a key={index} href={item.path} target="_blank">
                        <img src={item.icon} alt={item.label} className="img" />
                    </a>
                ))}
            </nav>
           <a href={contactButton.path} className="button">
                {contactButton.label}
           </a>
        </div>
    );
}

export default Contact;