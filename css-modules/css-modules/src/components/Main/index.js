import React from 'react'
import { Banner } from './Banner'
import { ContactForm } from './ContactForm'
import { Circles } from './Circles'
import { Contacts } from './Contacts'

export const Main = () => {
  return (
    <div>
        <Banner/>
        <Circles/>
        <ContactForm/>
        <Contacts/>
        
    </div>
  )
}
