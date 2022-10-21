const {MongoClient} = require("mongodb");
const uri ="mongodb+srv://u21649988:jlIC38ctO2U1zken@cluster0.c97pkq8.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function runFindQuery(collection, query, options) {
    try {
        await client.connect();
        const database = client.db('DBExample');
        const col = database.collection(collection);
        const cursor = col.find(query, options);

        return await cursor.toArray();
    } finally {
        await client.close();
    }
}

async function run() {
    let results = await runFindQuery("events", {"locations.area":"Brooklyn"},  {"projection":{"name":1, "description":1, '_id': 0}});
    console.log(results);
}

run();