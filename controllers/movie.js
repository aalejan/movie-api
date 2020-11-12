const movies = require('../movies')


const getMovieByTitle = (req, res) => {
  const { title } = req.params

  const movieFound = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(title.toLowerCase()) ||
    movie.directors.find((director) => director.toLowerCase().includes(title.toLowerCase()))
  })

  return res.send(movieFound)
}

const getAllMovies = (req, res) => {
  return res.send(movies)
}

module.exports = { getMovieByTitle, getAllMovies }
