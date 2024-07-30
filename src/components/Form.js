import React from "react";

export default function Form() {
    const [result, setResult] = React.useState("")
    const [emptyFields, setEmptyFields] = React.useState(false)
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    function checkIfFieldsAreNotEmpty() {
        if (formData.name === '' || formData.email === '' || formData.subject === '' || formData.message === '') {
            setEmptyFields(true)
        } else {
            setEmptyFields(false)
        }
    }
    
    function handleChange(event) {        
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })        
    }

    const handleSubmit = async (event) => {  
        event.preventDefault()
        setResult("Sending...")
        const newFormData = new FormData(event.target)
        newFormData.append("access_key", "5378599c-6a64-4555-9ba9-02d0c916c149")
        
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: newFormData
        })        

        const data = await response.json()
        if (data.success) {
            setResult("Form submitted successfully!")
            event.target.reset()
        } else {
            console.log("Error", data)
            setResult(data.message)
        }
    }

    return(
        <div className="m-form-container">
            <h1>Send me a message</h1>
            <p className="mt-4">Feel free to get in touch with me with anything related to CODINGSPACE or you can just say hi. I will get back to you as soon as I can.</p>
            <form className="m-contact-form mt-3" onSubmit={handleSubmit}>
                <label htmlFor='name'></label>
                <input required
                    id='name'
                    name='name'
                    className='m-input'
                    placeholder='Name'
                    type='text'
                    onChange={handleChange}
                />
                <label htmlFor='email'></label>
                <input required
                    id='email'
                    name='email'
                    className='m-input'
                    placeholder='Email'
                    type='email'
                    onChange={handleChange}
                />
                <label htmlFor='subject'></label>
                <input required
                    id='subject'
                    name='subject'
                    className='m-input'
                    placeholder='Subject'
                    type='text'
                    onChange={handleChange}
                />
                <label htmlFor='message'></label>
                <textarea required
                    id='message'
                    className='m-input'
                    name='message'
                    placeholder='Message'
                    type='text'
                    onChange={handleChange}
                />                
                <button 
                    className='mt-4' 
                    type='submit'
                    onClick={checkIfFieldsAreNotEmpty}
                >
                    Send
                </button>
            </form>
            <span>{result}</span>
        </div>
    )
}