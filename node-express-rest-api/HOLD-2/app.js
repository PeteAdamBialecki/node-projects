var faker = require('faker');

function generatePeople() {
    var people = []
    for (var id = 0; id < 50; id++) {
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        var favColor = faker.commerce.color()
        var birthDate = faker.date.past()
        people.push({
            "id": id,
            "last_name": lastName,
            "first_name": firstName,
            "favorite_color": favColor,
            "birth_date": birthDate
        })
    }
    return { "people": people }
}
module.exports = generatePeople