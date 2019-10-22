/* eslint-disable no-unused-vars */
import * as dynamoDbLib from '../../utils/dynamodb-lib';
import { success, failure } from '../../utils/response-lib';

// eslint-disable-next-line import/prefer-default-export
export async function main(event, context) {
  const params = {
    TableName: process.env.riftTable,
  };

  try {
    const result = await dynamoDbLib.call('scan', params);
    // Return the matching list of items in response body
    return success(result.Items);
  } catch (e) {
    return failure({
      status: false,
      message: e.message,
    });
  }
}
