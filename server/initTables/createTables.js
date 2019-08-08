const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB({
  region: 'ap-southeast-2',
  endpoint: 'https://dynamodb.ap-southeast-2.amazonaws.com',
});

const createUsers = require('./files/createUsers');
const createAdmin = require('./files/createAdmin');

createUsers(dynamodb);
createAdmin(dynamodb);
