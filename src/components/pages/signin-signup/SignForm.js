import React from "react";


export const SignForm = ({ children, onSubmit,handleChange }) => {

  return (

    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          className="signin-input"
          type="email"
          id="email"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="pass">Password:</label>
        <input
          className="signin-input"
          type="password"
          id="pass"
          onChange={handleChange}
        />
      </div>
      {children}
      <button style={{ marginTop: "10px" }} type="submit">
        Sign In
      </button>

    </form>
  )
}
