/* eslint-disable no-unused-vars */
import * as dynamoDbLib from '../../utils/dynamodb-lib';
import { success, failure } from '../../utils/response-lib';

// eslint-disable-next-line import/prefer-default-export
export async function main(event, context, callback) {
  // Request body is passed in as a JSON encoded string in 'event.body'
  const apiData = JSON.parse(event.body);

  const params = {
    TableName: process.env.userTable,
    Item: {
      userID: apiData.userID || event.requestContext.identity.cognitoIdentityId,
      address: apiData.address,
      city: apiData.city,
      cognitoID: apiData.cognitoID,
      email: apiData.email,
      emailConfirmed: apiData.emailConfirmed,
      firstName: apiData.firstName,
      lastName: apiData.lastName,
      postcode: apiData.postcode,
      state: apiData.state,
      isAdmin: apiData.isAdmin,
      createdAt: apiData.createdAt || Date.now(),
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
}
