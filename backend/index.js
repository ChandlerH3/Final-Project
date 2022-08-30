const express = require("express");
const morgan = require("morgan");

const { addPosts, getPosts} = require("./handlers")

express()
    .use(morgan("tiny"))
    .use(express.static("public"))
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use("/", express.static(__dirname + "/"))


    .post('/addposts', addPosts)
    .get('/getposts', getPosts)
    // handle 404s
    .use((req, res) => res.status(404).type("txt").send("🤷‍♂️"))

    .listen(8000, () => console.log("Listening on port 8000"));
