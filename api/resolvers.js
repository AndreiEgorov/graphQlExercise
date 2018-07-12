const data = require('./data.js');

const resolvers = {

    Query: {
        movies() {
            return data.movies
        },
        movie(root, { id }) {
            return data.movies.find(movie => movie.id === parseInt(id))
        }

    },
    Movie: {
        director(movie) {
            if (!movie.director) return null
            return data.people.find(person => person.id === movie.director)
        },
<<<<<<< HEAD
        stars(movie) {
            return data.people
        }
=======

        stars(movie) {
            return data.people.filter(person => (
              person.filmography.find(credit => (
                credit === movie.id && person.id !== movie.director
              ))
            ));
          },
>>>>>>> 667893de81847f76c7224b74828dc66e2af87722
    }





}

module.exports = resolvers