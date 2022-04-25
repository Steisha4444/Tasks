import React from 'react'
import { Menu } from '../Menu'
import { LanguageSelector } from '../LanguageSelector'
import { Banner } from '../Banner'
import { Logo } from '../Logo'
import "./style.css"


export const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <Logo />
        <div className="container">
          <Menu />
          <LanguageSelector />
        </div>
      </div>
      <Banner />
    </header>
  )
}

