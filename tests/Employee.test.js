const Employee = require("../lib/Employee");

describe('Employee', () => {
    test('test to get the correct name', () => {
        const test = new Employee('Richard', 1, 'rich@kim.com');
        expect(test.getName()).toBe('Richard');
    })

    test('test to get the correct id', () => {
        const test = new Employee('Richard', 1, 'rich@kim.com');
        expect(test.getId()).toBe(1);
    })

    test('test to get the correct email', () => {
        const test = new Employee('Richard', 1, 'rich@kim.com');
        expect(test.getEmail()).toBe('rich@kim.com');
    })

    test('test to get the correct role', () => {
        const test = new Employee('Richard', 1, 'rich@kim.com');
        expect(test.getRole()).toBe('Employee');
    })
})