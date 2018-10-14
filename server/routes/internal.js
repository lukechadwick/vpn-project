const router = require('express').Router();
const accessDB = require('../db/exampleDbFunctions');

router.get('/', (req, res) => {
  accessDB.getUsers().then(result => {
    res.json(result);
  });
});

module.exports = router;
