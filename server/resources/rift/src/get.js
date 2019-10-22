/* eslint-disable no-unused-vars */
import * as dynamoDbLib from '../../utils/dynamodb-lib';
import { success, failure } from '../../utils/response-lib';

// eslint-disable-next-line import/prefer-default-export
export async function main(event, context) {
  const apiData = JSON.parse(event.body);

  const params = {
    TableName: process.env.riftTable,
    Key: {
      id: apiData.id,
    },
  };

  try {
    const result = await dynamoDbLib.call('get', params);
    if (result.Item) {
      // Return the retrieved item
      return success(result.Item);
    }
    return failure({ status: false, error: 'Item not found.' });
  } catch (e) {
    return failure({
      status: false,
      message: e.message,
    });
  }
}
