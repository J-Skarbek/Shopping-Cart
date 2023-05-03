import React from "react";

function MailingListSignUp() {

  return (
    <div className="mailing-list-section flex">
      <form>
        <input type="text" id="first-name" name="first_name">First Name</input>
        <label htmlFor="first-name"></label>
        <input type="text" id="last-name" name="last_name">First Name</input>
        <label htmlFor="last-name"></label>
        <input type="email" id="email" name="email">First Name</input>
        <label htmlFor="email"></label>
      </form>
    </div>
  )
}

export default MailingListSignUp;