const createTheTable = require('./createTheTable');
const createAdmin = dynamodb => {
    const params = {
        TableName : 'Admin',
        KeySchema: [       
            { AttributeName: "adminID", KeyType: "HASH"}
        ],
        AttributeDefinitions: [       
            { AttributeName: "adminID", AttributeType: "S" }
        ],
        BillingMode: "PAY_PER_REQUEST",
    };

    createTheTable(dynamodb, params);
};

module.exports = createAdmin;