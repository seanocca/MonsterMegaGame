/* eslint-disable no-unused-vars */
import uuidv1 from 'uuid/v1';
import * as dynamoDbLib from '../../utils/dynamodb-lib';
import { success, failure } from '../../utils/response-lib';


// eslint-disable-next-line import/prefer-default-export
export async function main(event, context, callback) {
  // Request body is passed in as a JSON encoded string in 'event.body'
  const apiData = JSON.parse(event.body);

  const params = {
    TableName: process.env.augmentTable,
    Item: {
      id: apiData.id || uuidv1(),
      factionName: apiData.factionName || undefined,
      type: apiData.type || undefined,
      name: apiData.name || undefined,
      action: apiData.action || undefined,
      desc: apiData.desc || undefined,
      image: apiData.image || undefined,
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
}
