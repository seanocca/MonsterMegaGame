/* eslint-disable no-unused-vars */
import * as dynamoDbLib from './utils/dynamodb-lib';
import { success, failure } from './utils/response-lib';

// eslint-disable-next-line import/prefer-default-export
export async function main(event, context) {
  const params = {
    TableName: 'Users',
    // 'Key' defines the partition key and sort key of the item to be removed
    // - 'userId': Identity Pool identity id of the authenticated user
    // - 'noteId': path parameter
    Key: {
      userID: event.requestContext.identity.cognitoIdentityId,
    },
  };

  try {
    await dynamoDbLib.call('delete', params);
    return success({ status: true });
  } catch (e) {
    return failure({ status: false });
  }
}
