/* eslint-disable no-unused-vars */
import * as dynamoDbLib from '../../utils/dynamodb-lib';
import { success, failure } from '../../utils/response-lib';

// eslint-disable-next-line import/prefer-default-export
export async function main(event, context) {
  const apiData = JSON.parse(event.body);
  const params = {
    TableName: process.env.beastTable,
    Key: {
      factionName: apiData.factionName,
      id: apiData.id,
    },
  };

  try {
    await dynamoDbLib.call('delete', params);
    return success({ status: true });
  } catch (e) {
    return failure({
      status: false,
      message: e.message,
    });
  }
}
