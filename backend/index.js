const express = require("express");
const morgan = require("morgan");

const { addPosts, getPosts, addVotes, getVotes, patchVotes, getEachCommunityPosts, patchLikes} = require("./handlers")

express()
    .use(morgan("tiny"))
    .use(express.static("public"))
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use("/", express.static(__dirname + "/"))


    .post('/addposts', addPosts)
    .get('/getposts', getPosts)
    .get('/getposts/:community', getEachCommunityPosts)
    .patch('/patchLikes', patchLikes)
    
    .post('/addvotes', addVotes)
    .get('/getvotes', getVotes)
    .patch('/addvotes', patchVotes)
    // handle 404s
    .use((req, res) => res.status(404).type("txt").send("🤷‍♂️"))

    .listen(8000, () => console.log("Listening on port 8000"));
