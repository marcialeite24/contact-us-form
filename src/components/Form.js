import { func } from "prop-types";
import React from "react";

export default function Form() {
    return(
        <div className="m-form-container">
            <h1>Send me a message</h1>
            <p className="mt-4">Feel free to get in touch with me with anything related to CODINGSPACE or you can just say hi. I will get back to you as soon as I can.</p>
            <form className="m-contact-form mt-3">
            <label htmlFor='name'></label>
                <input 
                    id='name'
                    name='name'
                    className='m-input'
                    placeholder='Name'
                    type='text'
                />
                <label htmlFor='email'></label>
                <input 
                    id='email'
                    name='email'
                    className='m-input'
                    placeholder='Email'
                    type='text'
                />
                <label htmlFor='subject'></label>
                <input 
                    id='subject'
                    name='subject'
                    className='m-input'
                    placeholder='Subject'
                    type='text'
                />
                <label htmlFor='message'></label>
                <textarea 
                    id='message'
                    className='m-input'
                    name='message'
                    placeholder='Message'
                    type='text'
                />                
                <button className='mt-4' type='submit'>
                    Send
                </button>
            </form>
        </div>
    )
}