import React from 'react'
import './Projects.css'

function Projects () {
  return (
    <main className='projects'>
      <h1>My Projects</h1>
      <ul>
        <li>
          <h2>Social Media Platform</h2>
          <p>
            A social media platform built with React, Node.js, and MongoDB.
            Features include user authentication, posts and comments, likes and
            dislikes, and real-time notifications.
          </p>
          <a href='#'>View on GitHub</a>
        </li>
        <li>
          <h2>E-Commerce Site</h2>
          <p>
            An e-commerce site built with React, Node.js, and MySQL. Features
            include user authentication, product listings, shopping cart, and
            payment integration with Stripe.
          </p>
          <a href='#'>View on GitHub</a>
        </li>
        <li>
          <h2>Task Management App</h2>
          <p>
            A task management app built with React, Node.js, and MySQL. Features
            include user authentication, task creation and completion, and
            real-time updates.
          </p>
          <a href='#'>View on GitHub</a>
        </li>
      </ul>
    </main>
  )
}

export default Projects
