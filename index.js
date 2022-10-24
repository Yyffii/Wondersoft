const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000

// static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public.css'))
app.use('/js', express.static(__dirname + 'public.js'))
app.use('/img', express.static(__dirname + 'public.img'))

// set views
app.set('views', './views')
app.set('view engine', 'ejs')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://wonder:1832@wondersoft.piplff5.mongodb.net/?retryWrites=true&w=majority');
    } catch {
        console.error(err);
    }
}

connectDB();

app.get('', (req, res) => {
    res.render('index')
})

mongoose.connection.once('open', () => {
    console.log('Connected to mongodb');
    app.listen(port, () => console.log(`Wondersoft running on http://localhost:3000`))
})
