/* eslint-disable no-unused-vars */
import uuid from 'uuid';
// 535beec0-b8c6-11e9-a8c8-63de02c865af
// 65790230-b8c8-11e9-b2ff-a553a284bfdf
import * as dynamoDbLib from './utils/dynamodb-lib';
import { success, failure } from './utils/response-lib';

// eslint-disable-next-line import/prefer-default-export
export async function main(event, context, callback) {
  // Request body is passed in as a JSON encoded string in 'event.body'
  const apiData = JSON.parse(event.body);

  const params = {
    TableName: 'Users',
    // 'Item' contains the attributes of the item to be created
    // - 'userId': user identities are federated through the             Cognito
    // Identity Pool, we will use the identity id             as the user id of the
    // authenticated user
    // - 'noteId': a unique uuid
    // - 'content': parsed from request body
    // - 'attachment': parsed from request body
    // - 'createdAt': current Unix timestamp
    Item: {
      userID: event.requestContext.identity.cognitoIdentityId,
      uuid: uuid.v1(),
      firstname: apiData.firstname,
      lastname: apiData.lastname,
      createdAt: Date.now(),
    },
  };

  try {
    await dynamoDbLib.call('put', params);
    return success(params.Item);
  } catch (e) {
    return failure({
      status: false,
      message: e.message,
    });
  }

  // // eslint-disable-next-line no-unused-vars
  // dynamoDbLib.put(params, (error, data) => {
  //   // Set response headers to enable CORS (Cross-Origin Resource Sharing)
  //   const headers = {
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Credentials': true,
  //   };

  //   // Return status code 500 on error
  //   if (error) {
  //     const response = {
  //       statusCode: error.statusCode,
  //       headers,
  //       body: JSON.stringify({
  //         status: false,
  //         message: error.message,
  //       }),
  //     };
  //     callback(null, response);
  //     return;
  //   }

  //   // Return status code 200 and the newly created item
  //   const response = {
  //     statusCode: 200,
  //     headers,
  //     body: JSON.stringify(params.Item),
  //   };
  //   callback(null, response);
  // });
}
