const csv = require('csv-parser');
const fs = require('fs');

// TODO: Combine the three different delimited CSV files into a single comma delimited CSV file.

// TODO: Convert combined comma delimited CSV file to sinlge JSON file

fs.createReadStream('data-comma.csv')
    .pipe(csv())
    .on('data', (row) => {
        // console.log(row);
    })
    .on('end', () => {
        console.log('CSV file successfully processed.');
    });

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'out.json',
    header: [
        { id: 'name', title: 'Name' },
        { id: 'surname', title: 'Surname' },
        { id: 'age', title: 'Age' },
        { id: 'gender', title: 'Gender' },
    ]
});

// Sample JSON data
const data = [
    {
        name: 'John',
        surname: 'Carpenter',
        gender: 'Male',
        favoriteColor: 'Black',
        dateOfBirth: '1972-10-02'
    }, {
        name: 'Billie',
        surname: 'Holliday',
        gender: 'Female',
        favoriteColor: 'Red',
        dateOfBirth: '1918-05-15'
    }, {
        name: 'Devin',
        surname: 'Townsend',
        gender: 'Male',
        favoriteColor: 'Blue',
        dateOfBirth: '1985-07-25'
    }, {
        name: 'Winona',
        surname: 'Ryder',
        gender: 'Female',
        favoriteColor: 'Green',
        dateOfBirth: '1985-08-02'
    },
    {
        name: 'Sam',
        surname: 'Alice',
        gender: 'Female',
        favoriteColor: 'Pink',
        dateOfBirth: '1942-10-02'
    }
];

// String and number sorter method.
const sort_by = (field, reverse, primer) => {
    const key = primer ?
        function (x) {
            return primer(x[field])
        } :
        function (x) {
            return x[field]
        };
    reverse = !reverse ? 1 : -1;
    return function (a, b) {
        return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    }
}

// Sort by surname, case-insensitive, A-Z
let sortedSurname = data.sort(sort_by('surname', false, (a) => a.toUpperCase()));
const femaleFilter = sortedSurname.filter((item) => {
    return item.gender === 'Female';
});
const maleFilter = sortedSurname.filter((item) => {
    return item.gender === 'Male';
});
console.log(" ");
console.log("-------------Output 1a: Female Filter & Sorted-----------------");
console.log(femaleFilter);
console.log(" ");
console.log("-------------Output 1b: Male Filter & Sorted-----------------");
console.log(maleFilter);

// Sort by birth date, earliest to latest
console.log(" ");
console.log("-------------Output 2: Birthdate Sorting-----------------");
const test =
    console.log(data.sort(sort_by('dateOfBirth', true, parseInt)).reverse());

console.log(" ");
console.log("-------------Output 3a: Surname Sorted-----------------");
console.log(data.sort(sort_by('surname', false, (a) => a.toUpperCase())));

csvWriter
    .writeRecords(data)
    .then(() => console.log('Finished.'));


