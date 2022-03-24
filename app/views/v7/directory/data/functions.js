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

exports.createProfile = createProfile
exports.createEvents = createEvents
