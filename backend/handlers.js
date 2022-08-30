const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const addPosts = async (req, res) => {
    const newPost = {
        id: uuidv4(),
        post: req.body.post,
        date: req.body.date
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
        res.status(500).json({ status: 500, data: req.body, message: err.message });
        }
};

module.exports = {
    getPosts,
    addPosts
};