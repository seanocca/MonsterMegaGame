const createTheTable = require('./createTheTable');
const createUsers = dynamodb => {
    const params = {
        TableName : "Users",
        KeySchema: [       
            { AttributeName: "userID", KeyType: "HASH"}
        ],
        AttributeDefinitions: [       
            { AttributeName: "userID", AttributeType: "S" }
        ],
        ProvisionedThroughput: {       
            ReadCapacityUnits: 5, 
            WriteCapacityUnits: 5
        }
    };
    createTheTable(dynamodb, params);
};

module.exports = createUsers;