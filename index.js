const express = require('express')
const app = express()
const movies = require('./movies')


app.get('/movies', (req, res) => {
    return res.send(movies)
})

app.get('/movies/:title', (req, res) => {
    const {title} = req.params
    const movieFound = movies.filter((movies) =>{
        return movies.title.toLowerCase().includes(title.toLowerCase())
    } )
    return res.send(movieFound)
})

app.get('/movies/:director', (req, res) => {
    const {director} = req.params
    const directorFound = movies.filter((movie) => {
        return movie.directors.toLowerCase().includes(director.toLowerCase()) 
    })
    return res.send(directorFound)
})

app.all('*', (req, res) => {
    return res.send('wrong')
})

app.listen(2000)
console.log('listening to port 2000..')