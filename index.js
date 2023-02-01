const path = require("path")

const express = require("express")

const app = express()

const port = process.env.PORT || 3000

app.use(express.static('assets'))


app.get("/", (req, res) => {
    res.status(404).sendFile(path.join(__dirname, "/views/index.html"));
});


app.get("/HELP", (req, res) => {
    res.status(404).sendFile(path.join(__dirname, "/views/help.html"));
});

app.use((req,res) => {
    res.status(404).sendFile(path.join(__dirname, "/views/404.html"));
})
 

const startServer = () => {
    console.log(`The server is running on http://localhost:${port}`)
}

app.listen(port, startServer)