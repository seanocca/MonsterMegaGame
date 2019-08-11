/* eslint-disable no-unused-vars */
import * as dynamoDbLib from './utils/dynamodb-lib';
import { success, failure } from './utils/response-lib';

// eslint-disable-next-line import/prefer-default-export
export async function main(event, context) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: 'Users',
    // 'Key' defines the partition key and sort key of the item to be updated
    // - 'userId': Identity Pool identity id of the authenticated user
    // - 'noteId': path parameter
    Key: {
      userID: event.requestContext.identity.cognitoIdentityId,
    },
    // 'UpdateExpression' defines the attributes to be updated
    // 'ExpressionAttributeValues' defines the value in the update expression
    UpdateExpression: 'SET firstname = :firstname, lastname = :lastname',
    ExpressionAttributeValues: {
      ':firstname': data.firstname || null,
      ':lastname': data.lastname || null,
    },
    // 'ReturnValues' specifies if and how to return the item's attributes,
    // where ALL_NEW returns all attributes of the item after the update; you
    // can inspect 'result' below to see how it works with different settings
    ReturnValues: 'ALL_NEW',
  };

  try {
    await dynamoDbLib.call('update', params);
    return success({ status: true });
  } catch (e) {
    return failure({ status: false });
  }
}
