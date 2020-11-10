const express = require('express')
const app = express()
const movies = require('./movies')


app.get('/movies', (req, res) => {
    return res.send(movies)
})

app.get('/movies/:title', (req, res) => {
    const {title} = req.params
    const movieFound = movies.filter((movies) => movies.title === title)
    return res.send(movieFound)
})

app.all('*', (req, res) => {
    return res.send('wrong')
})

app.listen(2000)
console.log('listening to port 2000..')