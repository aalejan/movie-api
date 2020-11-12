const express = require('express')
const app = express()
const { getMovieByTitle, getAllMovies } = require('./controllers/movie')


app.get('/movies', getAllMovies)


app.get('/movies/:title', getMovieByTitle)

app.all('*', (req, res) => {
  return res.send('wrong')
}),

app.listen(2000)
console.log('listening to port 2000..')
