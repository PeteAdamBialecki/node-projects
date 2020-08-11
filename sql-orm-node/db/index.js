const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'movies.db',
    // global options
    // define: {
    //         timestamps: false, // disable timestamps
    //         freezeTableName: true, // disable plural table names
    //         modelName: 'stuff', // set model name to 'movie'; table name will be 'movies'
    //         tableName: 'sampleMovieTable', // table name change
    // },
});

const db = {
    sequelize,
    Sequelize,
    models: {},
};

db.models.Movie = require('./models/movie.js')(sequelize);
db.models.Person = require('./models/person.js')(sequelize);

module.exports = db;