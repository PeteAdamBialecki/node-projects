const db = require('./db');
const { Movie, Person } = db.models;
const { Op } = db.Sequelize;

(async () => {
    await db.sequelize.sync({ force: true });

    try {
        const movie0 = await Movie.create({
            title: 'Samsara',
            runtime: 99,
            releaseDate: '2011-09-11',
            isAvailableOnVHS: false,
        });
        console.log(movie0.toJSON());

        const movie1 = await Movie.create({
            title: 'Kite Runner',
            runtime: 99,
            releaseDate: '2011-09-11',
            isAvailableOnVHS: false,
        });
        console.log(movie1.toJSON());

        const movie2 = await Movie.create({
            title: '2001: A Space Odyssey',
            runtime: 142,
            releaseDate: '1968-04-03',
            isAvailableOnVHS: false,
        });
        console.log(movie2.toJSON());

        const movie3 = await Movie.create({
            title: 'Shawshank Redemption',
            runtime: 142,
            releaseDate: '1994-09-25',
            isAvailableOnVHS: false,
        });
        console.log(movie3.toJSON());

        const movie4 = await Movie.build({
            title: 'Blade Runner',
            runtime: 164,
            releaseDate: '2017-10-08',
            isAvailableOnVHS: false,
        });
        await movie4.save(); // Save the record
        console.log(movie4.toJSON());

        // const person = await Person.create({
        //     firstName: 'Butch',
        //     lastName: 'Cassidy',
        // });
        // console.log(person.toJSON());

        // const person2 = await Person.build({
        //     firstName: 'Tony',
        //     lastName: 'Montana'
        // });
        // await person2.save();

        // // Experiments:
        // // Find something that has an id of ... in this case, 2.
        // const movieById = await Movie.findByPk(2);
        // console.log(movieById.toJSON());

        // // Find the first matching...in this case, runtime of 164
        // const movieByRuntime = await Movie.findOne({ where: { runtime: 164 } });
        // console.log(movieByRuntime.toJSON());

        // List all movies
        // const movies = await Movie.findAll({
        //     attributes: ['id', 'title'],
        //     where: {
        //         releaseDate: {
        //             [Op.gte]: '1995-01-01'
        //         }
        //     },
        //     order: [['releaseDate', 'ASC']],

            // title: {
            //     [Op.endsWith]: 'runner'
            //   },        
            // },
            // order: [['id', 'DESC']] // IDs in descending order


            // releaseDate: {
            //     [Op.gte]: '2004-01-01', // greater than or equal to the date
            // },
            // runtime: {
            //     [Op.gt]: 95, // greater than 95
            // },
            // Additional Options
            // title: {
            //     [Op.endsWith]: 'story'
            // },
            // runtime: {
            //     [Op.between]: [75, 115]
            // }
        // });
        // console.log(movies.map(movie => movie.toJSON()));

        // //Filter Results
        // const people = await Person.findAll({
        //     where: {
        //         lastName: 'Montana'
        //     }
        // });
        // // SELECT * FROM People WHERE lastName = 'Montana';
        // console.log(people.map(person => person.toJSON()));

        // const movies5 = await Movie.findAll({
        //     where: {
        //         runtime: 142,
        //         isAvailableOnVHS: true
        //     }
        // });
        // // SELECT * FROM Movies WHERE runtime = 92 AND isAvailableOnVHS = true;
        // console.log(movies5.map(movie => movie.toJSON()));

    // const toyStory3 = await Movie.findByPk(3);
    // await toyStory3.update({
    //   isAvailableOnVHS: true,
    // });
    // console.log( toyStory3.get({ plain: true }) );

    //     // Find a record
    // const toyStory = await Movie.findByPk(1);

    // // Find and log all movies
    // const movies = await Movie.findAll();
    // console.log( movies.map(movie => movie.toJSON()) );

    //     // Delete a record
    // await toyStory.destroy();



    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            const errors = error.errors.map(err => err.message);
            console.error('Validation errors: ', errors);
        } else {
            throw error;
        }
    }
})();