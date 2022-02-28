const express = require('express');
const router = express.Router();

const verNum = 6;

//* Directory routes //
//* Directory routes END //

//* Referral routes //
router.post(`/v${verNum}/referral/immediate-danger`, function (req, res) {
  let answer = req.session.data['immediatedanger'];

  if (answer === 'No') {
    res.redirect(`/v${verNum}/referral/consent`);
  } else {
    res.redirect(`/v${verNum}/blocked`);
  }
});

router.post(`/v${verNum}/referral/consent`, function (req, res) {
  let answer = req.session.data['consent'];

  if (answer === 'Yes') {
    res.redirect(`/v${verNum}/referral/mash`);
  } else {
    res.redirect(`/v${verNum}/blocked`);
  }
});

router.post(`/v${verNum}/referral/mash`, function (req, res) {
  let answer = req.session.data['mash'];

  if (answer === 'Yes') {
    res.redirect(`/v${verNum}/referral/mash-assessment`);
  } else {
    res.redirect(`/v${verNum}/referral/ehcp`);
  }
});

router.post(`/v${verNum}/referral/ehcp`, function (req, res) {
  let answer = req.session.data['ehcp'];

  if (answer === 'Yes') {
    res.redirect(`/v${verNum}/referral/ehcp-details`);
  } else {
    res.redirect(`/v${verNum}/referral/referral-details-child-educational`);
  }
});
//* Referral routes END //

//*routes to be placed above this line//
module.exports = router

