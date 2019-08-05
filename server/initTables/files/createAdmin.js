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
        ProvisionedThroughput: {       
            ReadCapacityUnits: 5, 
            WriteCapacityUnits: 5
        }
    };

    createTheTable(dynamodb, params);
};

module.exports = createAdmin;