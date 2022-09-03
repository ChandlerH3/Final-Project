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
    console.log(req.body)
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
        res.status(500).json({ status: 500, message: err.message });
        }
};

module.exports = {
    getPosts,
    addPosts,
    addVotes,
    getVotes,
    patchVotes
};