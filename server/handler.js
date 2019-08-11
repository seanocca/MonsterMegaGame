/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/prefer-default-export
export const hello = async (event, context) => ({
  statusCode: 200,
  body: JSON.stringify({
    // eslint-disable-next-line no-use-before-define
    message: `Go Serverless v1.0! ${(await message({ time: 1, copy: 'Your function executed successfully!' }))}`,
  }),
});

// eslint-disable-next-line no-unused-vars
const message = ({ time, ...rest }) => new Promise((resolve, reject) => setTimeout(() => {
  resolve(`${rest.copy} (with a delay)`);
}, time * 1000));
