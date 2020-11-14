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

const saveNewMovie = (req, res) => {
  const {
    title, directors, releaseDate, rating, runTime, genres
  } = req.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    return res.status(400).send('wrong')
  }
  const newMovie = {
    title, directors, releaseDate, rating, runTime, genres
  }

  movies.push(newMovie)

  return res.status(201).send(newMovie)
}

module.exports = { getMovieByTitle, getAllMovies, saveNewMovie }
