const Manager = require("../lib/Manager");

describe('Manager', () => {
    test('test to get the correct name', () => {
        const test = new Manager('Richard', 1, 'rich@kim.com', 410);
        expect(test.getName()).toBe('Richard');
    })

    test('test to get the correct id', () => {
        const test = new Manager('Richard', 1, 'rich@kim.com', 410);
        expect(test.getId()).toBe(1);
    })

    test('test to get the correct email', () => {
        const test = new Manager('Richard', 1, 'rich@kim.com', 410);
        expect(test.getEmail()).toBe('rich@kim.com');
    })

    test('test to get the correct office number', () => {
        const test = new Manager('Richard', 1, 'rich@kim.com', 410);
        expect(test.getOfficeNumber()).toBe(410);
    })

    test('test to get the correct role', () => {
        const test = new Manager('Richard', 1, 'rich@kim.com');
        expect(test.getRole()).toBe('Manager');
    })

})