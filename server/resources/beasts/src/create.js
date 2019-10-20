/* eslint-disable no-unused-vars */
import uuidv1 from 'uuid/v1';
import * as dynamoDbLib from '../../utils/dynamodb-lib';
import { success, failure } from '../../utils/response-lib';


// eslint-disable-next-line import/prefer-default-export
export async function main(event, context, callback) {
  // Request body is passed in as a JSON encoded string in 'event.body'
  const apiData = JSON.parse(event.body);
  const params = {
    TableName: process.env.beastTable,
    Item: {
      factionName: apiData.factionName,
      id: apiData.id || uuidv1(),
      name: apiData.name || null,
      desc: apiData.desc || null,
      image: apiData.image || null,
      logo: apiData.logo || null,
      move: apiData.move || null,
      damage: apiData.damage || null,
      maxdmg: apiData.maxdmg || null,
      leap: apiData.leap || null,
      maxleap: apiData.maxleap || null,
      hp: apiData.hp || null,
      maxhp: apiData.maxhp || null,
      speed: apiData.speed || null,
      maxspeed: apiData.maxspeed || null,
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
