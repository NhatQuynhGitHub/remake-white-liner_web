'use client'
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import FooterNewsletterstyles from '@/styles/newsletter-footer.module.css'



export default function NewsletterForm({className}){
    const [isSent, SetIsSent] = useState()

    function handleSend(){

    }

    return (
        <form className={`${FooterNewsletterstyles['form-newsletter']} ${className}`}>
            <div className="newsletter">
                <label htmlFor="email"></label>
                <input 
                    className={`input ${FooterNewsletterstyles['newsletter-input']} ${className}`}
                    type="text" 
                    placeholder="Email"
                />
            </div>
            <button
                className={`btn ${FooterNewsletterstyles['newsletter-btn']} ${className}`}
                onSubmit={handleSend}
            >
                <FaArrowRight /></button>
        </form>
    )
}