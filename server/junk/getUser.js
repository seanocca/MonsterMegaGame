var AWS = require("aws-sdk");

AWS.config.update({
  region: "ap-southeast-2",
  endpoint: "https://dynamodb.ap-southeast-2.amazonaws.com"
});
 
var docClient = new AWS.DynamoDB.DocumentClient();

const cb = (err, data) => {
    if (err) {
        console.error("Unable to get item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("get user:", JSON.stringify(data, null, 2));
    }
};

var getUser = function(email,callback) {
     
    var params = {
            TableName: "Users",
            KeyConditionExpression: "#email = :email",
            ExpressionAttributeNames:{
                "#email": "email"
            },
            ExpressionAttributeValues: {
                ":email":email
            },
            ProjectionExpression: 'registerDate'
        };
     
    docClient.query(params,callback);
};

getUser('jon@doe.com', cb);