let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {

	ddb.put({
		TableName: 'Hiru_Test',
		Item: { 'sample': '001' }
	}, function (err, data) {
		if (err) {
			console.log(err);

		} else {
			console.log(data);
		}
	});

	ddb.put({
		TableName: 'sample',
		Item: { 'Name': 'Hiru' }
	}, function (err, data) {
		if (err) {
			//handle error
		} else {
			//your logic goes here
		}
	});


	callback(null, data);
}