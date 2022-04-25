import React from 'react'
import "./style.css"

export const Banner = () => {
    return (
        <div className="header__content">

            <div className="header__content-banner">
                <img className="header__banner-img" src={require("../../assets/img/bg.png")} />
            </div>

        </div>
    )
}
