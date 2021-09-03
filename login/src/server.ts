import express from "express"
import path from "path"
import "./database"
import { routes } from './routes'

const app = express()

app.use(express.static(path.join(__dirname, "..", "public")))
app.set("views", path.join(__dirname, "..", "public"))
app.engine("html", require("ejs").renderFile)
app.set("view engine", "html")

app.get('/', (req, res) => {
  res.render("html/login.html")
})

app.use(express.json())

app.use(routes)

app.listen(3333, () => console.log("server is running on port 3333"))