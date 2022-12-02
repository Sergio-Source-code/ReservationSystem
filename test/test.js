// Requiring module
const assert = require('assert');
const Reservation = require('../backend/models/reservation.js');
const Table = require('../backend/models/table.js');
const User = require('../backend/models/user.js');

// We can group similar tests inside a describe block
describe("Reservation Tests", () => {
    before(() => {
    });

    after(() => {
    });
        
    describe( "User Tests", () => {
        it("Check User firstName", async () => {
            User.create({firstName: 'Bob', lastName: 'Baker', email: 'bbaker@uh.edu', password: 'password', phone: 2222222222}).then((response) => {
                expect(response.firstName).equal('Bob');
                done();
            })
        });

        it("Check User lastName", async () => {
            User.create({firstName: 'Bob', lastName: 'Baker', email: 'bbaker@uh.edu', password: 'password', phone: 2222222222}).then((response) => {
                expect(response.lastName).equal('Baker');
                done();
            })
        });

        it("Check User email", async () => {
            User.create({firstName: 'Bob', lastName: 'Baker', email: 'bbaker@uh.edu', password: 'password', phone: 2222222222}).then((response) => {
                expect(response.email).equal('bbaker@uh.edu');
                done();
            })
        });

        it("Check User password", async () => {
            User.create({firstName: 'Bob', lastName: 'Baker', email: 'bbaker@uh.edu', password: 'password', phone: 2222222222}).then((response) => {
                expect(response.password).equal('password');
                done();
            })
        });

        it("Check User phone", async () => {
            User.create({firstName: 'Bob', lastName: 'Baker', email: 'bbaker@uh.edu', password: 'password', phone: 2222222222}).then((response) => {
                expect(response.phone).equal(2222222222);
                done();
            })
        });

    });

    describe("Reservation Tests", () => {
        it("Check reservation numberOfGuests", async () => {
            var currentDate = Date.now();
            Reservation.create({firstName: 'Sergio', lastName: 'Sanz', email: 'ssanz@uh.edu', numberOfGuests: 2, phoneNumber: 2812812812, tableNumber: 1, date: currentDate}).then((response) => {
                expect(response.numberOfGuests).equal(2);
                done();
            })
        });

        it("Check reservation tableNumber", async () => {
            var currentDate = Date.now();
            Reservation.create({firstName: 'Sergio', lastName: 'Sanz', email: 'ssanz@uh.edu', numberOfGuests: 2, phoneNumber: 2812812812, tableNumber: 1, date: currentDate}).then((response) => {
                expect(response.tableNumber).equal(1);
                done();
            })
        });
    });
});
