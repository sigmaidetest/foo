let AWS = require('aws-sdk');
let SL = require('@slappforge/slappforge-sdk');

const sqs = new SL.AWS.SQS(AWS);
const sns = new AWS.SNS();
const kinesis = new AWS.Kinesis();
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
	ddb.get({
		TableName: 'test',
		Key: { 'a': 'ba' }
	}, function (err, data) {
		if (err) {
			//handle error
		} else {
			//your logic goes here
		}
	});
	kinesis.describeStream({
		StreamName: 'kin'
	}).promise()
		.then(data => {
			// your logic goes here
		})
		.catch(err => {
			// error handling goes here
		});
	callback(null, 'Successfully executed');
	sns.publish({
		Message: 'tx',
		Subject: 'msg',
		MessageAttributes: {},
		MessageStructure: 'String',
		TopicArn: 'arn:aws:sns:eu-central-1:359675929438:sns'
	}).promise()
		.then(data => {
			// your code goes here
		})
		.catch(err => {
			// error handling goes here
		});
	sqs.receiveMessage({
		QueueUrl: 'https://sqs.eu-central-1.amazonaws.com/359675929438/sqs',
		AttributeNames: ['All'],
		MaxNumberOfMessages: '1',
		VisibilityTimeout: '30',
		WaitTimeSeconds: '0'
	}, function (receivedMessages) {
		receivedMessages.forEach(message => {
			// your logic to access each message through out the loop. Each message is available under variable message 
			// within this block
		})
	}, function (error) {
		// implement error handling logic here
	});
}