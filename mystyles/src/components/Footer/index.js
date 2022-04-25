import React from 'react'
import { Contacts } from '../Contacts'
import { ContactsForm } from '../ContactsForm'
import { Menu } from '../Menu'
import "./style.css"

export const Footer = () => {
    return (
        <section className="footer">
            <div className="footer__container">
                <div className="footer__menu">
                    <Menu />
                </div>
                <div className="footer__forms-wrapper">
                    <Contacts />
                    <ContactsForm />
                </div>
            </div>
            <footer className="footer__copyright">
                <p className="footer__copyright-text"> © 2019  Genius Web Agentur. Alle Rechte vorbehalten</p>
            </footer>
        </section>

    )
}
