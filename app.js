const { MongoClient } = require("mongodb");
 
// Replace the uri string with your connection string.
const uri = "mongodb://127.0.0.1:27017/mongosh?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.7.1"
 
const client = new MongoClient(uri);
const dbName='fruitsDB';
 
async function run() {
  try {
    const db = client.db(dbName);
    await db.command({ ping: 1 });
    console.log("Connected successfully to server");
    //const database = client.db('fruitsDb');
    const fruits = db.collection('fruits');

    const query ={name:"Apple"};

    const movie =await fruits.findOne(query);
    console.log(movie);

    // const doc = [{
    //     name: "Banana",
    //     review: "high level of phosphorus"
    //   },
    //   {
    //     name:"guava",
    //     review:"godd for mouth excersize"
    //   },
    //   {
    //     name:"orange",
    //     review:"good source of vitamin c"
    //   }];
    //   const options ={ordered:true};
    //   const result = await fruits.insertMany(doc,options);
    //   console.log(`${result.insertedCount} documents were inserted`);
    //console.log(`A document was inserted with the _id: ${result.insertedId}`);
 
    // fruits.insertMany([
 
    //     {name : "Apple", score: 8, review: "Great fruit"}, {name : "Orange", score: 6, review: "Kinda sour"}, {name : "Banana", score: 9, review: "Great stuff!"}
   
    //  ]); 
    
 
    //console.log(fruits);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);