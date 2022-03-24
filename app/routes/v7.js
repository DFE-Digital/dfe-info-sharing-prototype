const express = require('express');
const router = express.Router();

const verNum = 7;

// Data Functions
const createEvents = function () {
  // Get events from event object
  // Insert relavent dates (relative to child)
  // Order chronologically? Split into 'sections' etc.
  return [
    {
      title: 'New attendance',
      location: 'Netherstowe Primary School',
      category: 'EDUCATION'
    }
  ]
}

const createProfile = function () {
  // To dynamically create profile of child
  return {
    id: '1',
    firstName: 'Fred',
    lastName: 'Bloggs',
    dob: '10 Feb 2015',
    dobTimestamp: 1423558877,
    age: '7',
    uniqueIdentifier: '746-987-3432',
    gender: 'Male',
    ethnicity: 'White British',
    address: '12 Compton Street, Townsville, Countyville, DR34 5TO'
  }
}
//* Directory routes //
router.get([`/v${verNum}/directory/record/:childId`, `/v${verNum}/directory/record/:childId/:variantType`], function (req, res) {
  res.render(`v${verNum}/directory/child-record-dynamic.html`, {
    events: createEvents(),
    profile: createProfile()
  })
})
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

