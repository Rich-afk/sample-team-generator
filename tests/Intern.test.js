const Intern = require("../lib/Intern");

describe('Intern', () => {
    test('test to get the correct name', () => {
        const test = new Intern('Richard', 1, 'rich@kim.com', 'UNC');
        expect(test.getName()).toBe('Richard');
    })

    test('test to get the correct id', () => {
        const test = new Intern('Richard', 1, 'rich@kim.com', 'UNC');
        expect(test.getId()).toBe(1);
    })

    test('test to get the correct email', () => {
        const test = new Intern('Richard', 1, 'rich@kim.com', 'UNC');
        expect(test.getEmail()).toBe('rich@kim.com');
    })

    test('test to get the correct office number', () => {
        const test = new Intern('Richard', 1, 'rich@kim.com', 'UNC');
        expect(test.getSchool()).toBe('UNC');
    })

    test('test to get the correct role', () => {
        const test = new Intern('Richard', 1, 'rich@kim.com');
        expect(test.getRole()).toBe('Intern');
    })

})