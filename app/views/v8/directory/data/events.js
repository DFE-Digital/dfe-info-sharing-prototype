const professionals = require('./professionals')

const generateProfessionalContactDetails = function (professional) {
  return {
    id: professional.category + professional.id,
    name: professional.firstName + ' ' + professional.lastName,
    ...professional.contact
  }
}

const eventTimeline = [
  {
    id: '1',
    description: 'Timeline going back to birth with education details',
    categories: ['health', 'education'],
    events: [1, 2]
  },
  {
    id: '2',
    description: 'Partial timeline (starting from school) including significant events such as exclusion',
    categories: ['education'],
    events: [4]
  },
  {
    id: '3',
    description: 'Full timeline (starting from birth) including significant events such as exclusion',
    categories: ['education'],
    events: [1, 2, 4]
  },
  {
    id: '4',
    description: 'Full timeline (starting from birth) including significant events such as exclusion',
    categories: ['education', 'health', 'welfare', 'social'],
    events: [1, 2, 4, 5, 7, 9]
  }
]

const events = [
  {
    id: '1',
    type: 'simple',
    description: 'Home visits following birth',
    category: 'health',
    events: [
      {
        title: 'Initial visit',
        category: 'Health',
        offsetTime: {
          years: 0,
          months: 0,
          days: 3
        },
        contact: generateProfessionalContactDetails(professionals.default.health[0]),
        organisation: professionals.default.health[0].organisation,
        details: [
          {
            key: 'Details',
            value: 'Day 3 home visit'
          },
          {
            key: 'Observations',
            value: 'Child has difficulty latching'
          }
        ]
      },
      {
        title: 'Second visit',
        category: 'Health',
        offsetTime: {
          years: 0,
          months: 0,
          days: 10
        },
        contact: generateProfessionalContactDetails(professionals.default.health[0]),
        organisation: professionals.default.health[0].organisation,
        details: [
          {
            key: 'Details',
            value: 'Day 10 home visit'
          },
          {
            key: 'Observations',
            value: 'Child continues to demonstrate difficulty latching'
          },
          {
            key: 'Outcomes',
            value: 'Referred to local support to assist with breastfeeding and/or alternative paths'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    type: 'simple',
    description: 'Nursery at 3 and school at 5',
    category: 'education',
    events: [
      {
        title: 'New attendance',
        // location: 'Busy Bees Nursery',
        category: 'Education',
        offsetTime: {
          years: 2,
          months: 6,
          days: 10
        },
        contact: generateProfessionalContactDetails(professionals.default.education[0]),
        organisation: professionals.default.education[0].organisation,
        details: []
      },
      {
        title: 'New attendance',
        // location: 'Netherstowe Primary School',
        category: 'Education',
        offsetTime: {
          years: 4,
          months: 8,
          days: 10
        },
        contact: generateProfessionalContactDetails(professionals.default.education[1]),
        organisation: professionals.default.education[1].organisation,
        details: []
      }
    ]
  },
  {
    id: '3',
    type: 'complex',
    description: 'School at 5 with suspensions',
    category: 'education',
    events: [
      {
        title: 'New attendance',
        // location: 'Netherstowe Primary School',
        category: 'Education',
        offsetTime: {
          years: 4,
          months: 8,
          days: 10
        },
        contact: generateProfessionalContactDetails(professionals.default.education[1]),
        organisation: professionals.default.education[1].organisation,
        details: []
      },
      {
        title: 'Suspension',
        significantEvent: true,
        // location: 'Netherstowe Primary School',
        category: 'Education',
        offsetTime: {
          years: 5,
          months: 10,
          days: 5
        },
        contact: generateProfessionalContactDetails(professionals.default.education[1]),
        organisation: professionals.default.education[1].organisation,
        details: [
          {
            key: 'Details',
            value: 'Child has been suspended for 5 days due to incident occurring in the classroom'
          }
        ]
      }
    ]
  },
  {
    id: '4',
    type: 'complex',
    description: 'School at 5 with suspension and exclusion at secondary',
    category: 'education',
    events: [
      {
        title: 'New attendance',
        // location: 'Netherstowe Primary School',
        category: 'Education',
        offsetTime: {
          years: 4,
          months: 8,
          days: 10
        },
        contact: generateProfessionalContactDetails(professionals.default.education[1]),
        organisation: professionals.default.education[1].organisation,
        details: []
      },
      {
        title: 'Suspension',
        significantEvent: true,
        // location: 'Netherstowe Primary School',
        category: 'Education',
        offsetTime: {
          years: 5,
          months: 10,
          days: 5
        },
        contact: generateProfessionalContactDetails(professionals.default.education[1]),
        organisation: professionals.default.education[1].organisation,
        details: [
          {
            key: 'Details',
            value: 'Child has been suspended for 5 days due to incident occurring in the classroom'
          }
        ]
      },
      {
        title: 'New attendance',
        // location: 'Fairway High School',
        category: 'Education',
        offsetTime: {
          years: 11,
          months: 8,
          days: 10
        },
        contact: generateProfessionalContactDetails(professionals.default.education[2]),
        organisation: professionals.default.education[2].organisation,
        details: []
      },
      {
        title: 'Suspension',
        significantEvent: true,
        // location: 'Fairway High School',
        category: 'Education',
        offsetTime: {
          years: 14,
          months: 8,
          days: 20
        },
        contact: generateProfessionalContactDetails(professionals.default.education[2]),
        organisation: professionals.default.education[2].organisation,
        details: [
          {
            key: 'Details',
            value: 'Child has been suspended for 5 days for unacceptable behaviour on school grounds'
          }
        ]
      },
      {
        title: 'Exclusion',
        significantEvent: true,
        // location: 'Fairway High School',
        category: 'Education',
        offsetTime: {
          years: 15,
          months: 3,
          days: 15
        },
        contact: generateProfessionalContactDetails(professionals.default.education[2]),
        organisation: professionals.default.education[2].organisation,
        details: [
          {
            key: 'Details',
            value: 'Child has been permanently excluded for unacceptable behaviour on school grounds'
          }
        ]
      }
    ]
  },
  {
    id: '5',
    type: 'simple',
    description: 'Welfare involvement',
    category: 'welfare',
    events: [
      {
        title: 'Home visit',
        location: 'Home visit',
        category: 'Welfare',
        offsetTime: {
          years: 4,
          months: 11,
          days: 15
        },
        contact: generateProfessionalContactDetails(professionals.default.welfare[0]),
        organisation: professionals.default.welfare[0].organisation,
      }
    ]
  },
  {
    id: '6',
    type: 'complex',
    description: 'Welfare involvement',
    category: 'welfare',
    events: [
      {
        title: 'Home visit',
        location: 'Home visit',
        category: 'Welfare',
        offsetTime: {
          years: 4,
          months: 11,
          days: 15
        },
        contact: generateProfessionalContactDetails(professionals.default.welfare[0]),
        organisation: professionals.default.welfare[0].organisation,
      }
    ]
  },
  {
    id: '7',
    type: 'simple',
    description: 'Parents have separated',
    category: 'social',
    events: [
      {
        title: 'Home visit',
        significantEvent: true,
        category: 'Social',
        offsetTime: {
          years: 5,
          months: 3,
          days: 5
        },
        contact: generateProfessionalContactDetails(professionals.default.social[0]),
        organisation: professionals.default.social[0].organisation,
        details: []
      }
    ]
  },
  {
    id: '8',
    type: 'complex',
    description: 'Parents have separated',
    category: 'social',
    events: [
      {
        title: 'Home visit',
        significantEvent: true,
        category: 'Social',
        offsetTime: {
          years: 5,
          months: 3,
          days: 5
        },
        contact: generateProfessionalContactDetails(professionals.default.social[0]),
        organisation: professionals.default.social[0].organisation,
        details: []
      }
    ]
  },
  {
    id: '9',
    type: 'complex',
    description: 'School with a history of absences',
    category: 'education',
    events: [
      {
        title: 'Cause for concern',
        // location: 'Netherstowe Primary School',
        category: 'Education',
        offsetTime: {
          years: 6,
          months: 2,
          days: 2
        },
        contact: generateProfessionalContactDetails(professionals.default.education[1]),
        organisation: professionals.default.education[1].organisation,
        details: [
          {
            key: 'Details',
            value: 'Child has been increasingly absent from school. There have been 24 unauthorised absences this academic year.'
          }
        ]
      },
      {
        title: 'Cause for concern',
        // location: 'Fairway High School',
        category: 'Education',
        offsetTime: {
          years: 13,
          months: 10,
          days: 5
        },
        contact: generateProfessionalContactDetails(professionals.default.education[2]),
        organisation: professionals.default.education[2].organisation,
        details: [
          {
            key: 'Details',
            value: 'Child has been increasingly absent from school. There have been 24 unauthorised absences this academic year.'
          }
        ]
      }
    ]
  }
]

exports.events = events
exports.eventTimeline = eventTimeline
