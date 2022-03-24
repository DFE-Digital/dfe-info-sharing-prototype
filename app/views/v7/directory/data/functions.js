const individuals = require('./individuals')
const events = require('./events')

// Data Functions
const addToDate = function (ogDate, years, months, days) {
  let date = new Date(ogDate * 1000)
  console.log(date)
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
  const theEvents = events.events[0].events
  // console.log(theEvents)
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
  console.log(mappedEvents)
  // todo - do not add events that are outside of the individuals lifespan
  return mappedEvents
}

const createProfile = function (id = 1) {
  const individual = individuals.individuals.filter(x => x.id === id)
  // Todo - decorate with relatives and GP details etc.
  return individual[0]
}

exports.createProfile = createProfile
exports.createEvents = createEvents
