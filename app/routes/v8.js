const verNum = 8
const express = require('express')
const router = express.Router()
const data = require(`../views/v${verNum}/directory/data/functions`)

// Create readily available 'locals'
router.use((req, res, next) => {
  res.locals.verNum = verNum
  next()
})

//* Directory routes //
router.get([`/v${verNum}/directory/record/:childId`, `/v${verNum}/directory/record/:childId/:designVariant`, `/v${verNum}/directory/record/`], function (req, res) {
  const childId = req.params.childId || '1'
  const designVariant = req.params.designVariant || 'A'
  const profile = data.createProfile(childId)
  let eventTimelineId = req.query.eventTimelineId || '1'
  if (profile.timelineId) {
    eventTimelineId = profile.timelineId.toString()
  }
  const timelineVariant = req.query.timelineVariant || 'A'
  // const filterVariant = req.query.filterVariant || 'A'
  const events = data.createEvents(childId, eventTimelineId)
  res.render(`v${verNum}/directory/child-record-dynamic.html`, {
    events: events,
    profile: profile,
    interactionTypes: data.createInteractionTypes(events),
    designVariant: designVariant,
    timelineVariant: timelineVariant
  })
})

router.get([`/v${verNum}/directory/search-results`, `/v${verNum}/directory/child-record-results`], function (req, res) {
  const searchTerm = req.query.search || null
  const searchResults = data.createSearchResults(searchTerm)
  res.render(`v${verNum}/directory/search-results-dynamic.html`, {
    searchResults: searchResults
  })
})
//* Directory routes END //

//* Referral routes //
router.post(`/v${verNum}/referral/immediate-danger`, function (req, res) {
  let answer = req.session.data['immediatedanger']

  if (answer === 'No') {
    res.redirect(`/v${verNum}/referral/consent`)
  } else {
    res.redirect(`/v${verNum}/blocked`)
  }
})

router.post(`/v${verNum}/referral/consent`, function (req, res) {
  let answer = req.session.data['consent']

  if (answer === 'Yes') {
    res.redirect(`/v${verNum}/referral/locality`);
  } else {
    res.redirect(`/v${verNum}/blocked`)
  }
})

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
  let answer = req.session.data['mash']

  if (answer === 'Yes') {
    res.redirect(`/v${verNum}/referral/mash-assessment`)
  } else {
    res.redirect(`/v${verNum}/referral/barry-white-task-list-2`);
  }
})

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

