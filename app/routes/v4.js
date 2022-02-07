const express = require('express');
const router = express.Router();

const verNum = 4;

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
    res.redirect(`/v${verNum}/referral/child`);
  } else {
    res.redirect(`/v${verNum}/blocked`);
  }
});

router.post(`/v${verNum}/referral/are-there-any-other-significant-adults`, function (req, res) {
  let answer = req.session.data['significantadults'];

  if (answer === 'Yes') {
    res.redirect(`/v${verNum}/referral/other-significant-adults`);
  } else {
    res.redirect(`/v${verNum}/referral/are-there-any-other-professionals`);
  }
});

router.post(`/v${verNum}/referral/are-there-any-other-professionals`, function (req, res) {
  let answer = req.session.data['professionals'];

  if (answer === 'Yes') {
    res.redirect(`/v${verNum}/referral/other-professionals`);
  } else {
    res.redirect(`/v${verNum}/referral/mash`);
  }
});

router.post(`/v${verNum}/referral/mash`, function (req, res) {
  let answer = req.session.data['mash'];

  if (answer === 'Yes') {
    res.redirect(`/v${verNum}/referral/mash-assessment`);
  } else {
    res.redirect(`/v${verNum}/referral/referral-details-child-health`);
  }
});
//* Referral routes END //

//*routes to be placed above this line//
module.exports = router

