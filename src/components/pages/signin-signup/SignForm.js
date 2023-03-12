import React from "react";


export const SignForm = ({ children, onSubmit }) => {

  return (

      <form onSubmit={onSubmit}>
        {children}
      </form>
  )
}
