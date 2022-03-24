const individuals = require('./individuals')
// const events = require('./events')
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

const createProfile = function (id = 1) {
  const individual = individuals.individuals.filter(x => x.id === id)
  // Todo - decorate with relatives and GP details etc.
  return individual[0]
}

exports.createProfile = createProfile
exports.createEvents = createEvents
