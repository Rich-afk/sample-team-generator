const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

teamMembers = [];

// first make a manager object

// then create a menu of options whether or not to add another object
// if they choose to select an option, it runs inquirer once again

//if they pick they're done, it will take the list of team members and generate the file

// pushing members into an array list, pass that array into a function that builds the template of an html

const baseQuestions = [
    {
        message: 'What is the name?',
        name: 'name',
    },
    {
        message: 'What is the id number?',
        name: 'id',
    },
    {
        message: 'What is the email?',
        name: 'email',
    }
]

console.log('For the manager,'),
inquirer
    .prompt(
        [
            ...baseQuestions,
            {
                type: 'input',
                message: 'What is the office number?',
                name: 'officeNumber'
            },
            {
                type: 'list',
                message: 'Would you like to add another team member?',
                name: 'addMember',
                choices: [
                    { name: 'Engineer', value: 'engineer' },
                    { name: 'Intern', value: 'intern' },
                    { name: 'EXIT', value: 'exit' }
                ]
            }
        ]
    ).then(({ name, id, email, officeNumber, addMember }) => {
        console.log(addMember);
        teamMembers.push(new Manager(name, id, email, officeNumber));
        switch (addMember) {
            case 'engineer':
                engineerQuestions();
                break;
            case 'intern':
                internQuestions();
                break;
            default:
                toHTML(teamMembers);
        }
    })

function engineerQuestions() {
    inquirer
        .prompt(
            [
                ...baseQuestions,
                {
                    type: 'input',
                    message: 'What is the engineer\'s github?',
                    name: 'github'
                },
                {
                    type: 'list',
                    message: 'Would you like to add another team member?',
                    name: 'addMember',
                    choices: [
                        { name: 'Engineer', value: 'engineer' },
                        { name: 'Intern', value: 'intern' },
                        { name: 'EXIT', value: 'exit' }
                    ]
                }
            ]
        ).then(({ name, id, email, github, addMember }) => {
            console.log(addMember);
            teamMembers.push(new Engineer(name, id, email, github));
            switch (addMember) {
                case 'engineer':
                    engineerQuestions();
                    break;
                case 'intern':
                    internQuestions();
                    break;
                default:
                    toHTML(teamMembers);
            }
        })
}

function internQuestions() {
    inquirer
        .prompt(
            [
                ...baseQuestions,
                {
                    type: 'input',
                    message: 'What is the intern\'s school?',
                    name: 'school'
                },
                {
                    type: 'list',
                    message: 'Would you like to add another team member?',
                    name: 'addMember',
                    choices: [
                        { name: 'Engineer', value: 'engineer' },
                        { name: 'Intern', value: 'intern' },
                        { name: 'EXIT', value: 'exit' }
                    ]
                }
            ]
        ).then(({ name, id, email, school, addMember }) => {
            console.log(addMember);
            teamMembers.push(new Intern(name, id, email, school));
            switch (addMember) {
                case 'engineer':
                    engineerQuestions();
                    break;
                case 'intern':
                    internQuestions();
                    break;
                default:
                    toHTML(teamMembers);
            }
        })
}

function toHTML(members) {

    const htmlBody = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Members</title>
  </head>
  <body>
    <h1>Team Members</h1>
    ${members.map(member => `<div class='card'>
        <div class="container">
            <h4><b>${member.name}</b></h4>
            <p>${member.id}</p>
            <p>${member.email}</p>
            <p>${checkMember(member)}</p>
            </div>
        </div>`).join('\n')}
  </body>
  </html>`;

    fs.writeFile('./dist/index.html', htmlBody, { flag: 'w' }, (err) => {
        err ? console.error(err) : console.log('Success!');
    })

    console.log(members);
}

function checkMember(member) {
    switch (member.getRole()) {
        case 'Manager':
            return member.officeNumber;
        case 'Engineer':
            return member.github;
        //interns
        default:
            return member.school;
    }
}