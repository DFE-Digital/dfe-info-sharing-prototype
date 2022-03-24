const individuals = require('./individuals')
const events = require('./events')
// Data Functions

const addToDate = function (ogDate, years, months, days) {
  const date = new Date(ogDate)
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
  // Insert relavent dates (relative to child)
  // Order chronologically? Split into 'sections' etc.
  const theEvents = events.events[0].events
  console.log(theEvents)
  return theEvents
  // return [
  //   {
  //     title: 'New attendance',
  //     location: 'Netherstowe Primary School',
  //     category: 'EDUCATION'
  //   }
  // ]
}

const createProfile = function (id = 1) {
  const individual = individuals.individuals.filter(x => x.id === id)
  // Todo - decorate with relatives and GP details etc.
  return individual[0]
}

exports.createProfile = createProfile
exports.createEvents = createEvents
