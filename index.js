const express = require('express')
const app = express()
const port = 3000
const userRoute = require('./src/routes/user.route')

app.use("/soma", userRoute)

app.listen(port, () => {
    console.log(`app escutando a porta ${port}`)
})