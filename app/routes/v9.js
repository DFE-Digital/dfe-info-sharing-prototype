const verNum = 9
const express = require('express')
const router = express.Router()
// const data = require(`../views/v${verNum}/directory/data/functions`)

// Create readily available 'locals'
router.use((req, res, next) => {
  res.locals.verNum = verNum
  next()
})

// 1
router.post(`/v${verNum}/referral-threshold-painpoint-1/urgency`, function (req, res) {
  let answer = req.session.data['urgency'];

  if (answer === 'immediate') {
    res.redirect(`/v${verNum}/referral-threshold-painpoint-1/exit-points/use-emergency-services`);
  } else if (answer === 'safeguarding') {
    res.redirect(`/v${verNum}/referral-threshold-painpoint-1/exit-points/safeguarding`);

  } else {
    res.redirect(`/v${verNum}/referral-threshold-painpoint-1/have-you-searched-1`);
  }
});

router.post(`/v${verNum}/referral-threshold-painpoint-1/have-you-searched-1`, function (req, res) {
  let answer = req.session.data['have-you-searched-1'];

  if (answer === 'Yes') {
    res.redirect(`/v${verNum}/referral-threshold-painpoint-1/have-you-found-services`);
  } else {
    res.redirect(`/v${verNum}/referral-threshold-painpoint-1/hints-to-search`);
  }
});

router.post(`/v${verNum}/referral-threshold-painpoint-1/have-you-found-services`, function (req, res) {
  let answer = req.session.data['have-you-found-services'];
  let answerB = req.session.data['still-use-service'];

  if (answer === 'No') {
    res.redirect(`/v${verNum}/referral-threshold-painpoint-1/can-you-help-the-child-yourself`);
  }

  if (answer === 'Yes' && answerB === 'Yes') {
    res.redirect(`/v${verNum}/referral-threshold-painpoint-1/can-you-help-the-child-yourself`);
  } 

  if (answer === 'Yes' && answerB === 'No') {
    res.redirect(`/v${verNum}/referral-threshold-painpoint-1/fin`);
  }
});

router.post(`/v${verNum}/referral-threshold-painpoint-1/can-you-help-the-child-yourself`, function (req, res) {
  let answer = req.session.data['can-you-help-the-child-yourself'];
  let answerB = req.session.data['still-use-services'];

  if (answer === 'No') {
    res.redirect(`/v${verNum}/referral-threshold-painpoint-1/task-list`);
  }

  if (answer === 'Yes' && answerB === 'Yes') {
    res.redirect(`/v${verNum}/referral-threshold-painpoint-1/task-list`);
  } 

  if (answer === 'Yes' && answerB === 'No') {
    res.redirect(`/v${verNum}/referral-threshold-painpoint-1/fin`);
  }
});
// 1





// 1a
router.post(`/v${verNum}/referral-threshold-painpoint-1a/urgency`, function (req, res) {
  let answer = req.session.data['urgencya'];

  if (answer === 'immediate') {
    res.redirect(`/v${verNum}/referral-threshold-painpoint-1a/exit-points/use-emergency-services`);
  } else if (answer === 'safeguarding') {
    res.redirect(`/v${verNum}/referral-threshold-painpoint-1a/exit-points/safeguarding`);

  } else {
    res.redirect(`/v${verNum}/referral-threshold-painpoint-1a/list-of-services`);
  }
});

router.post(`/v${verNum}/referral-threshold-painpoint-1a/list-of-services`, function (req, res) {
  let answer = req.session.data['list-of-services'];

  if (answer == "None") {
    res.redirect(`/v${verNum}/referral-threshold-painpoint-1a/task-list`);
  } 

  else if (answer == undefined) {
    res.redirect(`/v${verNum}/referral-threshold-painpoint-1a/list-of-services`);
   
  } 

  else {
    res.redirect(`/v${verNum}/referral-threshold-painpoint-1a/are-there-another-service-they-need`);
  }
});

router.post(`/v${verNum}/referral-threshold-painpoint-1a/are-there-another-service-they-need`, function (req, res) {
  let answer = req.session.data['are-there-another-service-they-need'];

  if (answer == 'No') {
    res.redirect(`/v${verNum}/referral-threshold-painpoint-1a/why`);
  }

  if (answer == 'Yes') {
    res.redirect(`/v${verNum}/referral-threshold-painpoint-1a/task-list`);
  } 
});

router.post(`/v${verNum}/referral-threshold-painpoint-1a/why`, function (req, res) {
  let answer = req.session.data['why'];

  if (answer == 'Yes') {
    res.redirect(`/v${verNum}/referral-threshold-painpoint-1/task-list`);
  }

  if (answer == 'No') {
    res.redirect(`/v${verNum}/referral-threshold-painpoint-1/fin`);
  }
});
// 1a



// 1b
router.post(`/v${verNum}/referral-threshold-painpoint-1b/urgency`, function (req, res) {
  let answer = req.session.data['urgencyb'];

  if (answer === 'immediate') {
    res.redirect(`/v${verNum}/referral-threshold-painpoint-1b/exit-points/use-emergency-services`);
  } else if (answer === 'safeguarding') {
    res.redirect(`/v${verNum}/referral-threshold-painpoint-1b/exit-points/safeguarding`);

  } else {
    res.redirect(`/v${verNum}/referral-threshold-painpoint-1b/have-you-read-the-guidance`);
  }
});

router.post(`/v${verNum}/referral-threshold-painpoint-1b/have-you-read-the-guidance`, function (req, res) {
  let answer = req.session.data['have-you-read-the-guidance'];

  if (answer == 'Yes') {
    res.redirect(`/v${verNum}/referral-threshold-painpoint-1b/task-list`);
  } else if (answer == 'No') {
    res.redirect(`/v${verNum}/referral-threshold-painpoint-1b/guidance`);
  }
  else {
    res.redirect(`/v${verNum}/referral-threshold-painpoint-1b/have-you-read-the-guidance`);
  }
});

router.post(`/v${verNum}/referral-threshold-painpoint-1b/have-you-found-services`, function (req, res) {
  let answer = req.session.data['have-you-found-services'];
  let answerB = req.session.data['still-use-service'];

  if (answer === 'No') {
    res.redirect(`/v${verNum}/referral-threshold-painpoint-1b/can-you-help-the-child-yourself`);
  }

  if (answer === 'Yes' && answerB === 'Yes') {
    res.redirect(`/v${verNum}/referral-threshold-painpoint-1b/can-you-help-the-child-yourself`);
  } 

  if (answer === 'Yes' && answerB === 'No') {
    res.redirect(`/v${verNum}/referral-threshold-painpoint-1b/fin`);
  }
});

router.post(`/v${verNum}/referral-threshold-painpoint-1b/can-you-help-the-child-yourself`, function (req, res) {
  let answer = req.session.data['can-you-help-the-child-yourself'];
  let answerB = req.session.data['still-use-services'];

  if (answer === 'No') {
    res.redirect(`/v${verNum}/referral-threshold-painpoint-1b/task-list`);
  }

  if (answer === 'Yes' && answerB === 'Yes') {
    res.redirect(`/v${verNum}/referral-threshold-painpoint-1b/task-list`);
  } 

  if (answer === 'Yes' && answerB === 'No') {
    res.redirect(`/v${verNum}/referral-threshold-painpoint-1b/fin`);
  }
});
// 1b


//*routes to be placed above this line//
module.exports = router
