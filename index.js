import express from "express"
import bodyParser from "body-parser"

const app = express()
const port = 3000;


app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.get("/new", (req, res) => {
    res.render("blog.ejs")
})

app.post("/submit", (req, res) => {
    const heading = req.body["title"];
    const content = req.body["content"];
    res.render("index.ejs", { heading: heading, content: content })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})