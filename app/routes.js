const express = require('express');
const router = express.Router();

const v1Routes = require('./routes/v1');
const v2Routes = require('./routes/v2');
const v3Routes = require('./routes/v3');
const v4Routes = require('./routes/v4');
const v5Routes = require('./routes/v5');
const v6Routes = require('./routes/v6');
const v7Routes = require('./routes/v7');
const v8Routes = require('./routes/v8');
const v81Routes = require('./routes/v81');
const v9Routes = require('./routes/v9');

router.use('/', v1Routes);
router.use('/', v2Routes);
router.use('/', v3Routes);
router.use('/', v4Routes);
router.use('/', v5Routes);
router.use('/', v6Routes);
router.use('/', v7Routes);
router.use('/', v8Routes);
router.use('/', v81Routes);
router.use('/', v9Routes);

module.exports = router;
