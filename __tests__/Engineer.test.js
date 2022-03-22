const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    test('test to get the correct name', () => {
        const test = new Engineer('Richard', 1, 'rich@kim.com', 'Rich-afk');
        expect(test.getName()).toBe('Richard');
    })

    test('test to get the correct id', () => {
        const test = new Engineer('Richard', 1, 'rich@kim.com', 'Rich-afk');
        expect(test.getId()).toBe(1);
    })

    test('test to get the correct email', () => {
        const test = new Engineer('Richard', 1, 'rich@kim.com', 'Rich-afk');
        expect(test.getEmail()).toBe('rich@kim.com');
    })

    test('test to get the correct office number', () => {
        const test = new Engineer('Richard', 1, 'rich@kim.com', 'Rich-afk');
        expect(test.getGithub()).toBe('Rich-afk');
    })

    test('test to get the correct role', () => {
        const test = new Engineer('Richard', 1, 'rich@kim.com');
        expect(test.getRole()).toBe('Engineer');
    })

})