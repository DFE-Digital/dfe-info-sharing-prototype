const individuals = require('./individuals')
const events = require('./events')
const professionals = require('./professionals')

// Data Functions
const addToDate = function (ogDate, years, months, days) {
  const date = new Date(ogDate * 1000)
  if (years) {
    days += (years * 365)
  }
  if (months) {
    days += (months * 30)
  }
  date.setDate(date.getDate() + days)
  return date
}

const createEducationContacts = function (id) {
  const contact = individuals.contacts.filter(x => x.id == id)[0]
  return {
    ...contact
  }
}
const createHealthContacts = function (id) {
  const contact = individuals.contacts.filter(x => x.id == id)[0]
  return {
    ...contact
  }
}

const createMainContact = function (id, childLastName) {
  const contact = individuals.contacts.filter(x => x.id == id)[0]
  return {
    ...contact,
    name: contact.firstName + ' ' + childLastName
  }
}

const createContacts = function (childData) {
  const contacts = {
    mainContact: createMainContact(childData.contacts.mainContact.id, childData.lastName),
    gp: createHealthContacts(childData.contacts.gp.id),
    education: createEducationContacts(childData.contacts.education.id)
  }
  return contacts
}
const createSearchResults = function (searchTerm) {
  let results = individuals.individuals
  if (searchTerm != null) {
    results = results.filter(x => x.lastName.toLowerCase() === searchTerm.toLowerCase())
  }
  return results
}

const createEvents = function (childId, timelineId) {
  // Get events from event object
  timelineId = timelineId || 1
  const theEventTimeline = events.eventTimeline.filter(x => x.id === timelineId)[0].events
  const theEvents = []
  const theChild = individuals.individuals.filter(x => x.id === childId)[0]
  theEventTimeline.map(id => {
      const idsInArray = events.events.filter(x => (x.id == id))
      idsInArray.map(y => {
        y.events.map(c => {
          Object.entries(theChild.consent).forEach(([key, value]) => {
            if (value === true && camelize(c.category) === key) {
              theEvents.push(c)
            }
          })
        })
      })
    }
  )
  // Insert relevant dates (relative to child)
  const theDob = theChild.dobTimestamp
  const mappedEvents = theEvents.map(x => {
    const theEventDate = addToDate(theDob, x.offsetTime.years, x.offsetTime.months, x.offsetTime.days)
    return {
      ...x,
      slug: camelize(x.category),
      timestamp: theEventDate,
      dateString: theEventDate.toLocaleString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
    }
  })
  // Order chronologically? Split into 'sections' etc.
  mappedEvents.sort((x, y) => y.timestamp - x.timestamp)
  return mappedEvents.filter(a => new Date(a.timestamp) <= new Date())
}

const filterEventsByProfessional = function (events, professional) {
  console.log(professional.organisation.category + professional.id)
  const theEvents = events.filter(x => x.contact.id === professional.organisation.category + professional.id)
  console.log(theEvents.length)
  return theEvents
}

const createProfile = function (id = 1) {
  const individual = individuals.individuals.filter(x => x.id === id)[0]
  individual.contacts = createContacts(individual)
  return individual
}

const createProfessionalProfile = function (category, id = 1) {
  const professional = professionals.default[category].filter(x => x.id === id)[0]
  return professional
}

const getInteractionCountByType = function (interactions, interactionType) {
  const count = interactions.filter(item => item.category === interactionType)
  return count.length.toString()
}

const groupByProfessional = function (events) {
  const grouped = []
  const map = new Map()
  for (const item of events) {
    if (!map.has(item.contact.id)) {
      map.set(item.contact.id, true)
      grouped.push({
        // ...item,
        ...item.contact,
        organisation: item.organisation,
        events: events.filter(x => x.contact.id === item.contact.id)
      })
    }
  }
  grouped.sort((x, y) => y.events.length - x.events.length)
  console.log(grouped)
  return grouped
}

const groupByOrganisation = function (events) {
  const grouped = []
  const map = new Map()
  for (const item of events) {
    const uniqueId = item.organisation.category + item.organisation.id
    if (!map.has(uniqueId)) {
      map.set(uniqueId, true)
      grouped.push({
        ...item.organisation,
        events: events.filter(x => x.organisation.title === item.organisation.title)
      })
    }
  }
  grouped.sort((x, y) => y.events.length - x.events.length)
  return grouped
}

const getInteractionTypes = function (interactions) {
  const interactionTypes = []
  const map = new Map()
  for (const item of interactions) {
    if (!map.has(item.category)) {
      map.set(item.category, true)
      const count = getInteractionCountByType(interactions, item.category)
      interactionTypes.push({
        text: item.category + ' (' + count + ')',
        value: camelize(item.category),
        slug: camelize(item.category),
        count: count
      })
    }
  }

  return interactionTypes
}

const camelize = function (str) {
  return str.toLowerCase().replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase()
  }).replace(/\s+/g, '')
}

const createInteractionTypes = function (timeline) {
  return getInteractionTypes(timeline)
}

exports.createProfile = createProfile
exports.createEvents = createEvents
exports.createSearchResults = createSearchResults
exports.groupByProfessional = groupByProfessional
exports.groupByOrganisation = groupByOrganisation
exports.createInteractionTypes = createInteractionTypes
exports.createProfessionalProfile = createProfessionalProfile
exports.filterEventsByProfessional = filterEventsByProfessional
