import React from 'react'
import "./style.css"


export const Menu = () => {
    return (
        <nav className="menu">
            <ul className="menu__list">
                <li className="menu__list-item">
                    <a className="menu__link" href="#">PREISE</a>
                </li>
                <li className="menu__list-item">
                    <a className="menu__link" href="#">REFERENZEN</a>
                </li>
                <li className="menu__list-item">
                    <a className="menu__link" href="#">KONTAKT</a>
                </li>
            </ul>
        </nav>
    )
}
