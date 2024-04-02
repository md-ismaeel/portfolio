import React, { useRef } from 'react'
import "../Contact/GetInTouch.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const GetInTouch = () => {

    let firstRef = useRef(null)
    let lastRef = useRef(null)
    let emailRef = useRef(null)
    let numberRef = useRef(null)
    let textareaRef = useRef(null)

    const clickHandler = () => {

        if (firstRef.current.value && lastRef.current.value && emailRef.current.value && numberRef.current.value && textareaRef.current.value) {

            firstRef.current.value = ''
            lastRef.current.value = ''
            emailRef.current.value = ''
            numberRef.current.value = ''
            textareaRef.current.value = ''
            toast.success('Saved your data Successfully!!')

        } else {
            toast.warn('field is empty!!')
        }

    }

    return (
        <div className='touch-container'>
            <h2 className='info'>Personal Info</h2>
            <input type='text' placeholder='First_Name' ref={firstRef} />
            <input type='text' placeholder='Last_Name' ref={lastRef} />
            <input type='email' placeholder='Enter_Email' ref={emailRef} />
            <input type='number' placeholder='Enter_Number' ref={numberRef} />
            <textarea placeholder='Message' ref={textareaRef} />

            <button id='continue-btn' onClick={clickHandler}>Continue</button>
            <ToastContainer
                position="top-center"
            />
        </div>
    )
}
