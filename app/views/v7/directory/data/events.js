const addToDate = function (years, months, days) {
  const date = new Date(this.valueOf())
  if (years) {
    days += (years * 365)
  }
  if (months) {
    days += (months * 30)
  }
  date.setDate(date.getDate() + days)
  return date
}

const events = [
  {
    id: '1',
    type: 'simple',
    category: 'health',
    events: [
      {
        title: 'Initial visit',
        category: 'HEALTH - HOME VISIT',
        offsetTime: addToDate(0, 0, 3),
        exampleDate: '13 Feb 2015',
        contact: {
          phone: '01285 4445536 (extension 345)',
          email: 'barry.wilson@h.hospital.co.uk'
        },
        details: [
          {
            key: 'Attendee',
            value: 'Barry Wilson'
          },
          {
            key: 'Role',
            value: 'Health visitor'
          },
          {
            key: 'Details',
            value: 'Day 3 home visit'
          },
          {
            key: 'Observations',
            value: 'Child has difficulty latching'
          }
        ]
      }
    ]
  }
]

export default events
