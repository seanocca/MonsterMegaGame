var AWS = require("aws-sdk");

AWS.config.update({
  region: "ap-southeast-2",
  endpoint: "https://dynamodb.ap-southeast-2.amazonaws.com"
});
 
var dynamodb = new AWS.DynamoDB();
var params = {
        TableName:"Users",
        Item:{
            email : { S:"jon@doe.com"},
            fullname: { S:"Jmsfdbkmnv,cx"}
        }
    };

const cb = (err, data) => {
    if (err) {
        console.error("Unable to put item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Inserted user:", JSON.stringify(data, null, 2));
    }
};
  
dynamodb.putItem(params,cb); // this is also a upsert