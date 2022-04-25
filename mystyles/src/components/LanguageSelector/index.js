import React from 'react'
import "./style.css"

export const LanguageSelector = () => {
  return (
    <div className="language-menu">
    <select className="language-menu__select" >
      <option className="language-menu__select-value" value="EN" selected>EN</option>
    </select>
  </div>
  )
}
