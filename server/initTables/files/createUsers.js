const createTheTable = require('./createTheTable');
const createUsers = dynamodb => {
    const params = {
        TableName: "Users",
        KeySchema: [       
            { AttributeName: "userID", KeyType: "HASH"}
        ],
        AttributeDefinitions: [       
            { AttributeName: "userID", AttributeType: "S" }
        ],
        BillingMode: "PAY_PER_REQUEST",
    };
    createTheTable(dynamodb, params);
};

module.exports = createUsers;