import React from 'react'
import "./style.css"

export const Contacts = () => {
    return (
        
            <div className="footer__contacts">
        <div className="footer__contacts-wrapper">
                <ul className="footer__contacts-items">
                    <li className="footer__contact-item">
                        <img className="footer__contact-img" src={require("../../assets/img/location.png")} />
                        <span >Poststr, 45, 44890 Hamburg </span>
                    </li>
                    <li className="footer__contact-item">
                        <img  className="footer__contact-img" src={require("../../assets/img/email.png")} />
                        <span>hello@tratata.de</span>
                    </li>
                    <li className="footer__contact-item">
                        <img className="footer__contact-img" src={require("../../assets/img/telephone.png")} />
                        <span>040 380-33- 44</span>
                    </li>
                </ul>
                </div>
            </div>
      

    )
}
