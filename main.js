//console.log('Hello')

import express from 'express';
import { request } from 'http';
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(755, (err) => {
    if (err) {
        return console.log('Error')
    }
    console.log('Server is ok')
})