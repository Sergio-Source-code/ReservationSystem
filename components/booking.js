// This is the form to book our booking:

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const Booking = () => {
  const schema = yup.object().shape({
    firstName: yup.string().required('First is Required'),
    lastName: yup.string().required('Last is Required'),
    email: yup.string().email('Please enter valid email').required('Email is Required'),
    phoneNumber: yup.string().matches(/^[0-9]+$/, 'Must be only digits').min(10, 'Must be exactly 10 digits').max(10, 'Must be exactly 10 digits').required('Phone number is required'),
    numberOfGuests: yup.number().positive().integer().min(1).max(12, 'Limit of 12 guests per reservation').required('Number Of guests is required')
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const popup = (data) => {
    fetch('http://localhost:4000/api/reservations/traffic', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({date: data}),
    })
    .then(response => {
      if (response.status == 200){
        console.log("Display popup");
        alert('This is a high traffic day, are you sure you want to reserve?\nThere is a $50 no-show fee');
      } else {
      }
    })
  }

  const onSubmit = (data) => {
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
  };

  const [startDate, setStartDate] = useState(new Date());
  
  return (
    <div>
    {/* <div id="popup" style={{position: 'absolute', 'height': '100px', 'width': '100px', 'background-color': 'red'}}>
      <p style={{'align-items': 'center'}}>Popup text</p>
    </div> */}

    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='text' placeholder='First' {...register('firstName')} />
      <p>{errors.firstName?.message}</p>
      <input type='text' placeholder='Last' {...register('lastName')} />
      <p>{errors.lastName?.message }</p>
      <input type='text' placeholder='Email address' {...register('email')} />
      <p>{errors.email?.message }</p>
      <input type='text' placeholder='Phone number' {...register('phoneNumber')} />
      <p>{errors.phoneNumber?.message}</p>
      <input type='text' placeholder='# of guests' {...register('numberOfGuests')} />
      <p>{errors.numberOfGuests?.message}</p>
      <div> <DatePicker selected={startDate} onChange= {(date) => {popup(date); setStartDate(date)}} />
      </div> 
      <input type='submit'/>
    </form>
    </div>
  )
};