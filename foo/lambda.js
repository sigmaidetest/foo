let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
	ddb.put({
		TableName: 'fad',
		Item: {
			'k': 'ba'
		}
	}, function (err, data) {
		if (err) {
		} else {
		}
	});
	callback(null, 'Successfully executed');
}