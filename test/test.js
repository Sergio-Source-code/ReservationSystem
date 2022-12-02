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
        beforeEach(() => {
        });
        
        it("User created successfully", async () => {
            User.create({firstName: 'Bob', lastName: 'Baker', email: 'bbaker@uh.edu', password: 'password', phone: 2222222222}).then((response) => {
                expect(response).equal({firstName: 'bob', lastName: 'Baker', email: 'bbaker@uh.edu', password: 'password', phone: 2222222222});
                done();
            })
        });

        it("Check user api", () => {
            assert.equal(2*3, 6);
        });
    });

    describe("Reservation Tests", () => {
        beforeEach(() => {
        });
        
        it("Reservation created successfully", () => {
            var currentDate = Date.now();
            Reservation.create({firstName: 'Sergio', lastName: 'Sanz', email: 'ssanz@uh.edu', numberOfGuests: 2, phoneNumber: 2812812812, tableNumber: 1, date: currentDate}).then((response) => {
                expect(response).equal({firstName: 'Sergio', lastName: 'Sanz', email: 'ssanz@uh.edu', numberOfGuests: 2, phoneNumber: 2812812812, tableNumber: 1, date: currentDate});
                done();
            })
        });

        it("Check reservation api", () => {
            // fetch('http://localhost:4000/api/reservations', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({}),
            // })
            // .then(response => {
            //     expect(response.statusCode).equal(200);
            // })
        });
    });
});
