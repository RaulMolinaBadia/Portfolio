import React from 'react'
import './Contact.css'

function Contact () {
  return (
    <main className='contact'>
      <h1>Get in Touch</h1>
      <form>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' />
        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' />
        <label htmlFor='message'>Message:</label>
        <textarea id='message'></textarea>
        <button type='submit'>Send</button>
      </form>
    </main>
  )
}

export default Contact
