const verNum = 10
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
  const ur = req.query.ur || 'false'
  if (profile.timelineId) {
    eventTimelineId = profile.timelineId.toString()
  }
  const timelineVariant = req.query.timelineVariant || 'A'
  const events = data.createEvents(childId, eventTimelineId)
  res.render(`v${verNum}/directory/child-record-dynamic.html`, {
    events: events,
    profile: profile,
    ur: ur,
    interactionTypes: data.createInteractionTypes(events),
    designVariant: designVariant,
    timelineVariant: timelineVariant,
    professionalInteractions: data.groupByProfessional(events),
    organisationInteractions: data.groupByOrganisation(events)
  })
})

router.get([`/v${verNum}/directory/professional/:category/:professionalId`, `/v${verNum}/directory/professional/:category/:professionalId/:childId/`, `/v${verNum}/directory/professional/`], function (req, res) {
  const childId = req.params.childId || '1'
  const professionalId = req.params.professionalId || '1'
  const category = req.params.category || 'health'
  const designVariant = req.params.designVariant || 'A'
  const childProfile = data.createProfile(childId)
  const professionalProfile = data.createProfessionalProfile(category, professionalId)
  let eventTimelineId = req.query.eventTimelineId || '1'
  console.log(category)
  const ur = req.query.ur || 'false'
  if (childProfile.timelineId) {
    eventTimelineId = childProfile.timelineId.toString()
  }
  const timelineVariant = req.query.timelineVariant || 'A'
  let events = data.createEvents(childId, eventTimelineId)
  events = data.filterEventsByProfessional(events, professionalProfile)
  console.log(events)
  res.render(`v${verNum}/directory/professional-record-dynamic.html`, {
    events: events,
    professionalProfile: professionalProfile,
    profile: childProfile,
    ur: ur,
    interactionTypes: data.createInteractionTypes(events),
    designVariant: designVariant,
    timelineVariant: timelineVariant,
    professionalInteractions: data.groupByProfessional(events),
    organisationInteractions: data.groupByOrganisation(events)
  })
})

router.get([`/v${verNum}/directory/search-results`, `/v${verNum}/directory/child-record-results`], function (req, res) {
  const searchTerm = req.query.search || null
  const searchResults = data.createSearchResults(searchTerm)
  res.render(`v${verNum}/directory/search-results-dynamic.html`, {
    searchResults: searchResults
  })
})

router.get([`/v${verNum}/directory/search`, `/v${verNum}/directory/child-search`], function (req, res) {
  const searchVariant = req.query.searchVariant || null
  res.render(`v${verNum}/directory/child-search.html`, {
    searchVariant: searchVariant
  })
})

//* Directory routes END //

// Referrals start
router.post(`/v${verNum}/referral/assessment/can-be-met-universal-answer`, function (req, res) {
  let answer = req.session.data['have-you-assessed'];

    res.redirect(`/v${verNum}/referral/consent`);

});

router.post(`/v${verNum}/referral/assessment/have-you-assessed-answer`, function (req, res) {
  let answer = req.session.data['have-you-assessed'];

    res.redirect(`/v${verNum}/referral/assessment/can-be-met-universal`);

});

router.post(`/v${verNum}/referral/urgency`, function (req, res) {
  let answer = req.session.data['urgency'];

  if (answer === 'immediate') {
    res.redirect(`/v${verNum}/referral/exit-points/use-emergency-services`);
  } else if (answer === 'safeguarding') {
    res.redirect(`/v${verNum}/referral/exit-points/safeguarding`);

  } else {
    res.redirect(`/v${verNum}/referral/assessment/have-you-assessed`);
  }
});

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
    res.redirect(`/v${verNum}/referral/task-list`);
  } else {
    res.redirect(`/v${verNum}/blocked`)
  }
})

router.post(`/v${verNum}/referral/other-person-type`, function (req, res) {
  let answer = req.session.data['addapersontype'];

  if (answer === 'significant') {
    res.redirect(`/v${verNum}/referral/other-significant-adults`);
  }
  if (answer === 'professional') {
    res.redirect(`/v${verNum}/referral/other-professionals`);
  } 
  else {
    res.redirect(`/v${verNum}/referral/task-list-5`);
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

router.post(`/v${verNum}/referral/mash-assessment`, function (req, res) {
  let answer = req.session.data['mash-assessment']

  if (answer === 'Yes') {
    res.redirect(`/v${verNum}/referral/upload-assessment`)
  } else {
    res.redirect(`/v${verNum}/referral/assessment-date`);
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
    res.redirect(`/v${verNum}/referral/task-list-8`);
  }
});

router.post(`/v${verNum}/referral/supporting-documents`, function (req, res) {
  let answer = req.session.data['supporting-documents'];

  if (answer === 'Yes') {
    res.redirect(`/v${verNum}/referral/supporting-documents-upload`);
  } else {
    res.redirect(`/v${verNum}/referral/task-list-9`);
  }
});

router.post(`/v${verNum}/referral/email-notification`, function (req, res) {
  let answer = req.session.data['emailnotification'];

  if (answer === 'Yes') {
    res.redirect(`/v${verNum}/referral/email-notification-location`);
  } else {
    res.redirect(`/v${verNum}/referral/summary`);
  }
});
// Referrals end

//*routes to be placed above this line//
module.exports = router
