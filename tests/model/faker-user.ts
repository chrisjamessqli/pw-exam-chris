import { faker } from "@faker-js/faker";

export type User = {

    firstname: string;
    lastname: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    phoneNumber: string;
    ssn: string;
    username: string;
    email: string;
    password: string;

};

export function createUser() : User {
    const user = { 
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        phoneNumber: faker.phone.number(),
        ssn: faker.string.numeric(3) + '-' + faker.string.numeric(2) + '-' + faker.string.numeric(4),
        username: faker.internet.username(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    }
    return user;
}
