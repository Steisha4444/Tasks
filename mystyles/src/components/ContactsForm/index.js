import { useState } from "react";
import "./style.css"
import { useForm } from "../Validation";

export const ContactsForm = () => {
    const { values, errors, handleChange, handleSubmit } = useForm(submit);

    function submit() {
        console.log(values);
    }

    return (
        <div className="footer__contact-form">
            <div className="footer__form-wrapper">
                <div className="footer__form-title">
                    Schreiben Sie uns!
                </div >

                <form className="footer__form" id="form" onSubmit={handleSubmit}>

                    <input className="footer__input" type="text" name="organization" onChange={handleChange} placeholder="Firma/Organization" />

                    <div className="double-container">
                        <input className=" footer__input" name="email" type="email" placeholder="E-mail" onChange={handleChange} />


                        <input className="footer__input" type="tel" name="phone" placeholder="Telefon" onChange={handleChange} />

                    </div>
                    <textarea className="footer__textarea" name="messageText" placeholder="Was ist ihr anliegen?" onChange={handleChange}
                        required />

                    <button type="submit" className="footer__form-button">

                        <span className="footer__form-button-name">senden</span>
                    </button>
                  


                </form>
                <div className="form__error" >
                        {errors.organization && (
                            <span className="form__error__message">{errors.organization +"\n"}</span>
        
                        )}
                        <br/>
                        {errors.email && (
                            <span className="form__error__message">{errors.email+"\n"}</span>
                        )}
                        {errors.phone && (
                            <span className="form__error__message">{"\n"+errors.phone+"\n"}</span>

                        )}
                        {errors.messageText && (
                            <span className="form__error__message">{errors.messageText+"\n"}</span>
                        )}
                    </div>
            </div>
        </div>
    )
}
