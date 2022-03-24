const individuals = require('./individuals')
const events = require('./events')

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

const createEvents = function (childId, timelineId) {
  // Get events from event object
  timelineId = timelineId || 1
  const theEventTimeline = events.eventTimeline.filter(x => x.id === timelineId)[0].events
  const theEvents = []
  theEventTimeline.map(id => {
    const idsInArray = events.events.filter(x => (x.id == id))
    idsInArray.map(y => {
      y.events.map(c => theEvents.push(c))
    })
  }
  )
  // Insert relevant dates (relative to child)
  const theChild = individuals.individuals.filter(x => x.id === childId)[0]
  // console.log(theChild)
  const theDob = theChild.dobTimestamp
  const mappedEvents = theEvents.map(x => {
    const theEventDate = addToDate(theDob, x.offsetTime.years, x.offsetTime.months, x.offsetTime.days)
    return {
      ...x,
      timestamp: theEventDate,
      dateString: theEventDate.toLocaleString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
    }
  })
  // Order chronologically? Split into 'sections' etc.
  mappedEvents.sort((x, y) => y.timestamp - x.timestamp)
  return mappedEvents.filter(a => new Date(a.timestamp) <= new Date())
}

const createProfile = function (id = 1) {
  const individual = individuals.individuals.filter(x => x.id === id)
  // Todo - decorate with relatives and GP details etc.
  return individual[0]
}

exports.createProfile = createProfile
exports.createEvents = createEvents
