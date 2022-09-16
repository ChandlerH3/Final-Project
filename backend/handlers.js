const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const addVotes = async (req, res) => {
    const newPost = {
        id: uuidv4(),
        votes: req.body.votes
    }
    try {
        const client = new MongoClient(MONGO_URI, options);
        await client.connect();
        const db = client.db("The_District");
    
        await db.collection("votes").insertOne(newPost);
        const result = await db.collection("votes").find().toArray();
        result ? res.status(200).json({ status: 201, data: result })
        : res.status(404).json({ status: 404, data: "Not Found" });
        client.close();
        } catch (err) {
        res.status(500).json({ status: 500, data: req.body, message: err.message });
        }
};

const getVotes = async (req, res) => {
    try {
        const client = new MongoClient(MONGO_URI, options);
        await client.connect();
        const db = client.db("The_District");
    
        const result = await db.collection("votes").find().toArray();
        result ? res.status(200).json({ status: 200, data: result }) 
        : res.status(404).json({ status: 404, data: "Not Found" });
        client.close();
        } catch (err) {
        res.status(500).json({ status: 500, message: err.message });
        }
};

const patchVotes = async (req, res) => {
    const votes = req.body.votes
    if (!votes){
        res.status(400).json({
            status: 400, message: 'unable to update due to key missing',
        });
    }
    try {
        const client = new MongoClient(MONGO_URI, options);
            const newValues = { $set: { ...req.body } };
            await client.connect();

            const db = client.db('The_District');
            await db.collection("votes").updateOne({}, newValues);

            res.status(200).json({ status: 200, votes });
            client.close();
        } catch (err) {
            res.status(500).json({ status: 500, message: err.message });
        }
};

const addPosts = async (req, res) => {
    const newPost = {
        id: uuidv4(),
        likes: req.body.likes,
        picture: req.body.picture,
        user: req.body.user,
        community: req.body.community,
        post: req.body.post,
        date: req.body.date,
        comments: req.body.comments
    }
    try {
        const client = new MongoClient(MONGO_URI, options);
        await client.connect();
        const db = client.db("The_District");
    
        await db.collection("posts").insertOne(newPost);
        const result = await db.collection("posts").find().toArray();
        result.length && res.status(200).json({ status: 201, data: result });
        client.close();
        } catch (err) {
        res.status(500).json({ status: 500, data: req.body, message: err.message });
        }
};

const getPosts = async (req, res) => {
    try {
        const client = new MongoClient(MONGO_URI, options);
        await client.connect();
        const db = client.db("The_District");

        const result = await db.collection("posts").find().sort({ _id: -1 }).toArray();
        result ? res.status(200).json({ status: 200, data: result }) 
        : res.status(404).json({ status: 404, data: "Not Found" });
        client.close();
        } catch (err) {
        res.status(500).json({ status: 500, message: err.message });
        }
};

const getEachCommunityPosts = async (req, res) => {
    const community = req.params.community
    try {
        const client = new MongoClient(MONGO_URI, options);
        await client.connect();
        const db = client.db("The_District");

        const result = await db.collection("posts").find({community: community}).sort({ _id: -1 }).toArray();
        result ? res.status(200).json({ status: 200, data: result }) 
        : res.status(404).json({ status: 404, data: "Not Found" });
        client.close();
        } catch (err) {
        res.status(500).json({ status: 500, message: err.message });
        }
};

const patchLikes = async (req, res) => {
    const likes = req.body.likes
    const id = req.body.id
    const query = { id: id };
    try {
        const client = new MongoClient(MONGO_URI, options);
            const newValues = { $set: { "likes": likes }};
            await client.connect();

            const db = client.db('The_District');
            await db.collection("posts").updateOne(query, newValues);
            const find = await db.collection("posts").findOne(query);

            find ? res.status(200).json({ status: 200, likes, data: find})
            : res.status(404).json({ status: 404, data: "Not Found" });
            client.close();
        } catch (err) {
            res.status(500).json({ status: 500, message: err.message });
        }
};

const patchComments = async (req, res) => {
    const comments = req.body.comments
    const id = req.body.id
    const query = { id: id };
    try {
        const client = new MongoClient(MONGO_URI, options);
            const newValues = { $set: { "comments": comments }};
            await client.connect();

            const db = client.db('The_District');
            await db.collection("posts").updateOne(query, newValues);
            const find = await db.collection("posts").findOne(query);

            find ? res.status(200).json({ status: 200, data: find})
            : res.status(404).json({ status: 404, data: "Not Found" });
            client.close();
        } catch (err) {
            res.status(500).json({ status: 500, message: err.message });
        }
};

const deletePosts = async (req, res) => {
    const id = req.body.id
    const query = { id: id };
    try {
        const client = new MongoClient(MONGO_URI, options);
            await client.connect();

            const db = client.db('The_District');
            await db.collection("posts").deleteOne(query);
            const find = await db.collection("posts").find().toArray();

            find ? res.status(200).json({ status: 200, data: find})
            : res.status(404).json({ status: 404, data: "Not Found" });
            client.close();
        } catch (err) {
            res.status(500).json({ status: 500, message: err.message });
        }
};


module.exports = {
    getPosts,
    getEachCommunityPosts,
    addPosts,
    patchLikes,
    addVotes,
    getVotes,
    patchVotes,
    patchComments,
    deletePosts
};