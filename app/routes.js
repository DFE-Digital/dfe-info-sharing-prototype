const express = require('express');
const router = express.Router();

const v1Routes = require('./routes/v1');
const v2Routes = require('./routes/v2');


router.use('/', v1Routes);
router.use('/', v2Routes);


module.exports = router;
