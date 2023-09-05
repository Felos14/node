const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
//configurar handlebars como template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.get('/', (req, res) => {
    const user = {
        name: "Felipe",
        age: 19
    }
    res.render('home', {user})
})

app.get('/users', (req, res) => {
    res.render('users')

})

app.listen(3000,() => {
    console.log("Servidor rodando na porta: 3000")
})