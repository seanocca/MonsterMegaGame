/* eslint-disable no-unused-vars */
import * as dynamoDbLib from './utils/dynamodb-lib';
import { success, failure } from './utils/response-lib';

// eslint-disable-next-line import/prefer-default-export
export async function main(event, context, callback) {
  // Request body is passed in as a JSON encoded string in 'event.body'
  const apiData = JSON.parse(event.body);

  const params = {
    TableName: 'Users',
    Item: {
      userID: event.requestContext.identity.cognitoIdentityId,
      address: apiData.address,
      city: apiData.city,
      cognitoID: apiData.cognitoID,
      email: apiData.email,
      emailConfirmed: apiData.emailConfirmed,
      firstName: apiData.firstName,
      lastName: apiData.lastName,
      postcode: apiData.postcode,
      state: apiData.state,
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
