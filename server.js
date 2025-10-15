const express = require('express')
const productRouter = require("./routes/product.route")

const app = express()
const port = 3000

app.get('/',(req, res) => {
    res.send("Hello, How are you? I am find, thank you!");
} )

app.use("/api/product", productRouter)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
}) 