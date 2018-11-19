const express = require('express')
const app = express()
// helps look what is being sent by the client
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
// our html, css etc dont need ind routes, they use this
app.use(express.static('public'))

app.listen(3000, () => {
  console.log("listening on 3000")
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
