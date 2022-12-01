// File Description: This is how you reserve a seat on your application.

// Packages to Import:
import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import { useState } from "react";
import parse from 'html-react-parser';

// Reserve A Seat Component:
export default function SignIn() {
    // Local Variables:


    return (
    <main className="main_class sign_in_page">
        <h1> Sign In Below </h1>
        <form method = "POST" id = "sign_up_form">
            <label for = "first_name"> First Name: </label>
            <input name = "first_name"></input>
            <label for = "last_name"> Last Name: </label>
            <input name = "last_name"></input>
            <label for = "password"> Password: </label>
            <input name = "password" type = "password"></input>
            <label for = "confirm_password"> Confirm Password: </label>
            <input name = "confirm_password" type = "password"></input>
            <label for = "user_number"> User Number: </label>
            <input name = "user_number" type = "tel"></input>
            <label for = "email"> Email: </label>
            <input name = "email" type = "email"></input><br></br>
            <input type = "submit" value = "Submit" />
        </form>
    </main>
    )
}