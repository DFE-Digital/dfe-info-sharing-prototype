const express = require('express');
const router = express.Router();

const v1Routes = require('./routes/v1');
const v2Routes = require('./routes/v2');
const v3Routes = require('./routes/v3');
const v4Routes = require('./routes/v4');
const v5Routes = require('./routes/v5');
const v6Routes = require('./routes/v6');
const v7Routes = require('./routes/v7');


router.use('/', v1Routes);
router.use('/', v2Routes);
router.use('/', v3Routes);
router.use('/', v4Routes);
router.use('/', v5Routes);
router.use('/', v6Routes);
router.use('/', v7Routes);

module.exports = router;
