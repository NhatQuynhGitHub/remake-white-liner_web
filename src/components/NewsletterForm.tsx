'use client'
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";



export default function NewsletterForm({formClassName, inputClassName, btnClassName}){
    const [isSent, setIsSent] = useState()

    return (
        <form className={formClassName}>
            <div className="newsletter">
                <label htmlFor="email"></label>
                <input 
                    className={inputClassName}
                    type="text" 
                    placeholder="Email"
                />
            </div>
            <button
                className={btnClassName}
                onClick={() => {
                    setIsSent(true)
                }}
            >
                <FaArrowRight /></button>
                {isSent && <p>Thanks for your interesting</p>}
        </form>
    )
}


