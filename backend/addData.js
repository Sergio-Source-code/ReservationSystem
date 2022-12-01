const express = require('express');
const mongoose = require('mongoose');
const Reservation = require('./models/reservation.js');
const Table = require('./models/table.js');
const User = require('./models/user.js');
require('dotenv').config();

app = express();

let cors = require("cors");
app.use(cors());


mongoose.connect(process.env.MONGO_URI);

User.db.dropCollection('users');
User.create({firstName: "Kenneth", lastName: "Dang", email: "kennethpd@gmail.com", password: "justsurviving", phone: 0000000000}).then((a, b) => a.save());
User.create({firstName: 'Sergio', lastName: 'Sanz', email: 'ssanz@uh.edu', password: 'password', phone: 2812812812}).then((a, b) => a.save());
User.create({firstName: 'Alice', lastName: 'Bailey', email: 'abailey@uh.edu', password: 'password', phone: 1111111111}).then((a, b) => a.save());
User.create({firstName: 'Bob', lastName: 'Baker', email: 'bbaker@uh.edu', password: 'password', phone: 2222222222}).then((a, b) => a.save());

Table.db.dropCollection('tables');
Table.create({id: 1, size: 2}).then((a, b) => a.save());
Table.create({id: 2, size: 2}).then((a, b) => a.save());
Table.create({id: 3, size: 2}).then((a, b) => a.save());
Table.create({id: 4, size: 4}).then((a, b) => a.save());
Table.create({id: 5, size: 4}).then((a, b) => a.save());
Table.create({id: 6, size: 4}).then((a, b) => a.save());
Table.create({id: 7, size: 4}).then((a, b) => a.save());
Table.create({id: 8, size: 6}).then((a, b) => a.save());
Table.create({id: 9, size: 6}).then((a, b) => a.save());
Table.create({id: 10, size: 6}).then((a, b) => a.save());

Reservation.db.dropCollection('reservations');
Reservation.create({firstName: 'Sergio', lastName: 'Sanz', email: 'ssanz@uh.edu', numberOfGuests: 2, phoneNumber: 2812812812, tableNumber: 1, date: Date.now()}).then((a, b) => a.save());
Reservation.create({firstName: 'Kenneth', lastName: 'Dang', email: 'kennethpd@gmail.com', numberOfGuests: 2, phoneNumber: 0000000000, tableNumber: 2, date: Date.now()}).then((a, b) => a.save());
Reservation.create({firstName: 'Alice', lastName: 'Bailey', email: 'abailey@uh.edu', numberOfGuests: 4, phoneNumber: 1111111111, tableNumber: 4, date: Date.now()}).then((a, b) => a.save());
Reservation.create({firstName: 'Bob', lastName: 'Baker', email: 'bbaker@uh.edu', numberOfGuests: 6, phoneNumber: 2222222222, tableNumber: 8, date: Date.now()}).then((a, b) => a.save());

console.log("Done");