// File Description: This is how you reserve a seat on your application.

// Packages to Import:
import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import { useState } from "react";
import parse from 'html-react-parser';

// Reserve A Seat Component:
export default function ReserveASeat() {
  // Local Variables:
  var string = "<select name = 'number_of_guests' required>";
  var isSignIn = false;
  const [disabledState, setDisabledState] = useState(true); 
  
  // Local Functions:
  const outputNumberOfGuestFunction = () => {
    for (let i = 1; i < 20; i++) {
      string += "<option value = '" + i + "'> " + i + "</option>";
    }
    string += "</select>";
    return string;
  } // Function to Render All 
  const sign_in_or_not = () => {
    return (
        <div id = 'user_alert_for_registration'>
        <h2> Would you like to sign in? </h2>
        <fieldset>
          <label for = 'sign_in_yes'> Yes </label>
          <input type = 'radio' name = 'sign_in_or_not' value = 'yes' />
          <label for = 'sign_in_yes'> No </label>
          <input type = 'radio' name = 'sign_in_or_not' value = 'no' />
          <input type = 'submit'> Continue &#62; </input>
        </fieldset>
      </div>
    )
  } // Template to prompt user to sign in.
  const onSubmit = (data) => {
    // Fetch post route via endpoint:
    fetch('http://localhost:4000/api/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (response.status == 200){
        console.log("Table reserved!")
      } else {
        console.log("Reservation failed");
      }
    })
  }; // Function to handle submiting the form.
  const enabledSubmit = () => {
    if(disabledState === true) {
      setDisabledState(false);
    } else {
      setDisabledState(true);
    }
  }; // Enable submit button if checked and disabled if unchecked.

  return (
    <main className="main_class reservation_page">
        <h1> Reserve a Seat With Us! </h1>
        <h2> We&apos;re glad to have you dine with us! </h2>
        <form method = "POST" id = "reservation_form">
            <label for = "first_name"> First Name: </label>
            <input type = "text" name = "first_name" required />
            <label for = "last_name"> Last Name: </label>
            <input type = "text" name = "last_name" required />
            <label for = "number_of_guests"> Number Of Guests: </label>
            { parse(outputNumberOfGuestFunction()) }
            <label for = "email"> Email: </label>
            <input type = "text" name = "email" required />
            <label for = "phone_number"> Phone Number: </label>
            <input type = "tel" name = "phone_number" required />
            <label for = "date"> Desired Reservation Date: </label>
            <input type = "date" name = "date" required />
            <label for = "time"> Desired Reservation Time: </label>
            <input type = "time" name = "time" value="08:30:00" step = "1800" required />
            <details><summary>No Show Policy</summary> Clients would be charged $50 for a no-show fee. </details>
            <label for = "no_show_policy"> I've read the no-show policy! </label>
            <input type = "checkbox" name = "no_show_policy" onClick={enabledSubmit}/>
            <input type = "submit" value = "Submit" disabled={disabledState}></input>
        </form>
    </main>
  )
}