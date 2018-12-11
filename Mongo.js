const MongoClient = require('mongodb').MongoClient;

var add = (obj)=>{
	MongoClient.connect('mongodb://localhost:27017/EES',{ useNewUrlParser: true },( err , client )=>{
		if(err)  return console.log("unable to connect to the Mongo database server");
		console.log("connected to mongodb server");
		const db = client.db('EES'); ///

		db.collection('students').insertOne(obj,
		(err ,result)=>{
			if(err)  return console.log("unable to insert:",err);
			console.log(JSON.stringify(result.ops, undefined, 2));
		});
		client.close();
	});

}

module.exports = {
	add,
}