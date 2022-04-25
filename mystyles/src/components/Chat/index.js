import React from 'react'
import chat from "../../assets/svg/chat.svg"
import "./style.css"

export const Chat = () => {
  return (
    <div className="chat">
      <img className="chat__picture" src={chat}/>
    </div>
  )
}
