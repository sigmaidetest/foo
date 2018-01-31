let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
	ddb.put({
		TableName: 'fad',
		Item: {
			'k': 'b'
		}
	}, function (err, data) {
		if (err) {
			//handle error
		} else {
			//your logic goes here
		}
	});
	callback(null, 'Successfully executed');
}