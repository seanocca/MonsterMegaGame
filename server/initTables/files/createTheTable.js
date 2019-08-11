module.exports = createTheTable = (dynamodb, params) =>
  dynamodb.createTable(params).promise().then(response => {
      console.log(`${params.TableName} table successfully made`);
  }).catch(error => {
      console.log(`Error creating ${params.TableName} table: ${error.message}`);
  });