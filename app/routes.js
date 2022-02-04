const express = require('express');
const router = express.Router();

const v1Routes = require('./routes/v1');
const v2Routes = require('./routes/v2');
const v3Routes = require('./routes/v3');
const v4Routes = require('./routes/v4');


router.use('/', v1Routes);
router.use('/', v2Routes);
router.use('/', v3Routes);
router.use('/', v4Routes);


module.exports = router;
