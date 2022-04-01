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
    events: [1, 2, 4, 5, 7]
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
        category: 'HEALTH - HOME VISIT',
        offsetTime: {
          years: 0,
          months: 0,
          days: 3
        },
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
      },
      {
        title: 'Second visit',
        category: 'HEALTH - HOME VISIT',
        offsetTime: {
          years: 0,
          months: 0,
          days: 10
        },
        exampleDate: '20 Feb 2015',
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
        location: 'Busy Bees Nursery',
        category: 'EDUCATION',
        offsetTime: {
          years: 2,
          months: 6,
          days: 10
        },
        contact: {},
        details: []
      },
      {
        title: 'New attendance',
        location: 'Netherstowe Primary School',
        category: 'EDUCATION',
        offsetTime: {
          years: 4,
          months: 8,
          days: 10
        },
        contact: {
          name: 'John Ball (Headteacher)',
          phone: '01225 55487',
          email: 'jb@netherstowe-primary.co.uk'
        },
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
        location: 'Netherstowe Primary School',
        category: 'EDUCATION',
        offsetTime: {
          years: 4,
          months: 8,
          days: 10
        },
        contact: {
          name: 'John Ball (Headteacher)',
          phone: '01225 55487',
          email: 'jb@netherstowe-primary.co.uk'
        },
        details: []
      },
      {
        title: 'Suspension',
        significantEvent: true,
        location: 'Netherstowe Primary School',
        category: 'EDUCATION',
        offsetTime: {
          years: 5,
          months: 10,
          days: 5
        },
        contact: {
          name: 'John Ball (Headteacher)',
          phone: '01225 55487',
          email: 'jb@netherstowe-primary.co.uk'
        },
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
        location: 'Netherstowe Primary School',
        category: 'EDUCATION',
        offsetTime: {
          years: 4,
          months: 8,
          days: 10
        },
        contact: {
          name: 'John Ball (Headteacher)',
          phone: '01225 55487',
          email: 'jb@netherstowe-primary.co.uk'
        },
        details: []
      },
      {
        title: 'Suspension',
        significantEvent: true,
        location: 'Netherstowe Primary School',
        category: 'EDUCATION',
        offsetTime: {
          years: 5,
          months: 10,
          days: 5
        },
        contact: {
          name: 'John Ball (Headteacher)',
          phone: '01225 55487',
          email: 'jb@netherstowe-primary.co.uk'
        },
        details: [
          {
            key: 'Details',
            value: 'Child has been suspended for 5 days due to incident occurring in the classroom'
          }
        ]
      },
      {
        title: 'New attendance',
        location: 'Fairway High School',
        category: 'EDUCATION',
        offsetTime: {
          years: 11,
          months: 8,
          days: 10
        },
        contact: {
          name: 'Mary Spicer (Headteacher)',
          phone: '01225 342567',
          email: 'mary.spicer@thefairwayschool.co.uk'
        },
        details: []
      },
      {
        title: 'Suspension',
        significantEvent: true,
        location: 'Fairway High School',
        category: 'EDUCATION',
        offsetTime: {
          years: 14,
          months: 8,
          days: 20
        },
        contact: {
          name: 'Mary Spicer (Headteacher)',
          phone: '01225 342567',
          email: 'mary.spicer@thefairwayschool.co.uk'
        },
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
        location: 'Fairway High School',
        category: 'EDUCATION',
        offsetTime: {
          years: 15,
          months: 3,
          days: 15
        },
        contact: {
          name: 'Mary Spicer (Headteacher)',
          phone: '01225 342567',
          email: 'mary.spicer@thefairwayschool.co.uk'
        },
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
        }
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
        }
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
        }
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
        }
      }
    ]
  }
]

exports.events = events
exports.eventTimeline = eventTimeline
