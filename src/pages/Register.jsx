import React from 'react'

export default function Register() {
  return (
    <div>
      <section>
      <h2>Student Registration</h2>

      <form>
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </section>
    </div>
  )
}
