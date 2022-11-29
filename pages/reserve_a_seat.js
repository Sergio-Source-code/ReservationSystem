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
  
  // Local Functions:
  const outputNumberOfGuestFunction = () => {
    for (let i = 1; i < 20; i++) {
      string += "<option value = '" + i + "'> " + i + "</option>";
    }
    string += "</select>";
    return string;
  }

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
        </form>
    </main>
  )
}