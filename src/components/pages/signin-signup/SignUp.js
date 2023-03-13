import React, { useEffect, useState } from "react";
import { SignForm } from "./SignForm";

export const SignUp = () => {
  const [newUser, setNewUser] = useState({ email: "", password: "", name: "johnny walker" })

  useEffect(() => {

    console.log(newUser)
  }, [newUser])

  function handleChange(e) {
    const target = e.target
    console.log(target)
    if (target.id == 'email') {
      console.log('yes')
      setNewUser(prev => ({ ...prev, email: target.value}))
    }
    setNewUser(prev => ({ ...prev, password: target.value }))
  }

  return (
    <div className="page">
      <h1> Sign Up  </h1>
      <SignForm handleChange={handleChange} onSubmit={(e) => {
        console.log('Signed up!')
        e.preventDefault()
      }}>
        <div>
          <label htmlFor="co-pass"> confirm password: </label>
          <input type="password" id="co-pass" onChange={handleChange} />
        </div>
      </SignForm>
    </div>
  )
};
