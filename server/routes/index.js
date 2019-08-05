const router = require('express').Router();
const processError = require('../utils/processError');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send('Server up!');
});

router.get('/test', async (req, res, next) => {
  const getParam = { TableName: 'icecreams' };

  req.app.get('dynamoDb').scan(getParam).promise().then(response => {
    res.status(200).send(response.Items);
  }).catch(error => processError(error, res));
});

router.post('/test', async (req, res, next) => {
  const { name, id } = req.body;

  const params = {  
    TableName: 'icecreams',  
    Item: {
        icecreamid: id,
        name: name,
        hhh: 'kkk'
    } 
  };

  req.app.get('dynamoDb').put(params).promise().then(response => {
    res.status(200).send(`Hi ${name}, you are ID ${id}.`);
  }).catch(error => processError(error, res));
});

module.exports = router;
