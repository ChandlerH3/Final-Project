const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const batchImport = async (req, res) => {
    try {
        const client = new MongoClient(MONGO_URI, options);
    
        // connect to the client
        await client.connect();
    
        // connect to the database (db name is provided as an argument to the function)=
        const db = client.db("MVP");
        console.log("connected!");
    
        await db.collection("test").insertMany(movies);
        const result = await db.collection("test").find().toArray();
        console.log(result)
        client.close();
        // result.length && res.status(201).json({ status: 201, data: req.body });
        } catch (err) {
        console.log(err.stack);
        // res.status(500).json({ status: 500, data: req.body, message: err.message });
        }
}
batchImport(); 