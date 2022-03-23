const express = require('express');
const router = express.Router();

const verNum = 7;

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
    res.redirect(`/v${verNum}/referral/locality`);
  } else {
    res.redirect(`/v${verNum}/blocked`);
  }
});

router.post(`/v${verNum}/referral/are-there-any-other-significant-adults`, function (req, res) {
  let answer = req.session.data['significantadults'];

  if (answer === 'Yes') {
    res.redirect(`/v${verNum}/referral/other-significant-adults`);
  } else {
    res.redirect(`/v${verNum}/referral/task-list-4`);
  }
});

router.post(`/v${verNum}/referral/are-there-any-other-professionals`, function (req, res) {
  let answer = req.session.data['significantadults3a'];

  if (answer === 'Yes') {
    res.redirect(`/v${verNum}/referral/other-professionals`);
  } else {
    res.redirect(`/v${verNum}/referral/task-list-5a`);
  }
});

router.post(`/v${verNum}/referral/mash`, function (req, res) {
  let answer = req.session.data['mash'];

  if (answer === 'Yes') {
    res.redirect(`/v${verNum}/referral/mash-assessment`);
  } else {
    res.redirect(`/v${verNum}/referral/barry-white-task-list-2`);
  }
});

router.post(`/v${verNum}/referral/behaviour-5`, function (req, res) {
  let answer = req.session.data['behaviourprevious'];

  if (answer === 'Yes') {
    res.redirect(`/v${verNum}/referral/behaviour-6`);
  } else {
    res.redirect(`/v${verNum}/referral/behaviour-8`);
  }
});

router.post(`/v${verNum}/referral/family-history`, function (req, res) {
  let answer = req.session.data['familyhistory'];

  if (answer === 'Yes') {
    res.redirect(`/v${verNum}/referral/family-history-details`);
  } else {
    res.redirect(`/v${verNum}/referral/task-list-9`);
  }
});

//* Referral routes END //

//*routes to be placed above this line//
module.exports = router

