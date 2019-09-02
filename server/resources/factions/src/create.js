/* eslint-disable no-unused-vars */
import uuidv1 from 'uuid/v1';
import * as dynamoDbLib from '../../utils/dynamodb-lib';
import { success, failure } from '../../utils/response-lib';


// eslint-disable-next-line import/prefer-default-export
export async function main(event, context, callback) {
  // Request body is passed in as a JSON encoded string in 'event.body'
  const apiData = JSON.parse(event.body);

  const params = {
    TableName: process.env.factionTable,
    Item: {
      id: apiData.id || uuidv1(),
      name: apiData.name || undefined,
      leader: apiData.leader || undefined,
      faculty: apiData.faculty || undefined,
      banner: apiData.banner || undefined,
      logo: apiData.logo || undefined,
      desc: apiData.desc || undefined,
      test: undefined,
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
