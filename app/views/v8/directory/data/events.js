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
  },
  {
    id: '5',
    description: 'Scenario to fit UR round 3 - significant events around primary school and no further significant events at secondary',
    categories: ['education', 'health', 'welfare', 'social'],
    events: [1, 5, 6, 10]
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
      },
      {
        title: 'New attendance',
        // location: 'Fairway High School',
        category: 'Education',
        offsetTime: {
          years: 16,
          months: 1,
          days: 1
        },
        contact: generateProfessionalContactDetails(professionals.default.education[3]),
        organisation: professionals.default.education[3].organisation,
        details: []
      }
    ]
  },
  {
    id: '5',
    type: 'complex',
    description: 'School at 5 with suspension and exclusion early on and improvements thereafter',
    category: 'education',
    events: [
      {
        title: 'New attendance',
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
        title: 'Challenging behavior',
        significantEvent: true,
        category: 'Education',
        offsetTime: {
          years: 7,
          months: 2,
          days: 5
        },
        contact: generateProfessionalContactDetails(professionals.default.education[1]),
        organisation: professionals.default.education[1].organisation,
        details: [
          {
            key: 'Details',
            value: 'The child became increasingly disruptive and confrontational during a lesson and ended up throwing a chair at a wall.'
          },
          {
            key: 'Outcomes',
            value: 'The child was told to see the head teacher and a verbal reprimand was given and their father was informed of what had happened at the end of the school day.'
          }
        ]
      },
      {
        title: 'New attendance',
        significantEvent: true,
        category: 'Education',
        offsetTime: {
          years: 7,
          months: 6,
          days: 8
        },
        contact: generateProfessionalContactDetails(professionals.default.education[3]),
        organisation: professionals.default.education[3].organisation,
        details: []
      }
    ]
  },
  {
    id: '6',
    type: 'complex',
    description: 'Family Support involvement',
    category: 'social',
    events: [
      {
        title: 'Home visit',
        category: 'Family support',
        offsetTime: {
          years: 6,
          months: 3,
          days: 15
        },
        contact: generateProfessionalContactDetails(professionals.default.social[0]),
        organisation: professionals.default.social[0].organisation,
        details: [
          {
            key: 'Observations',
            value: 'Parental conflict following a split. Supporting mother with parenting and managing child’s behaviour.'
          },
          {
            key: 'Outcomes',
            value: 'Assessment has been conducted to identify areas of need within the family. Direct support is required'
          }
        ]
      },
      {
        title: 'Case review',
        category: 'Family support',
        offsetTime: {
          years: 7,
          months: 1,
          days: 1
        },
        contact: generateProfessionalContactDetails(professionals.default.social[0]),
        organisation: professionals.default.social[0].organisation,
        details: [
          {
            key: 'Observations',
            value: 'The plan in place with the family has been working well, and a noticeable improvement has been noted in the child’s behaviour, both in school and at home.'
          },
          {
            key: 'Outcomes',
            value: 'The case will be closed as the family are coping well and further involvement is not needed at this time.'
          }
        ]
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
  },
  {
    id: '10',
    type: 'complex',
    description: 'Mixed health record, dental, GP visits and A&E',
    category: 'health',
    events: [
      {
        title: 'Immunisations',
        category: 'Health',
        offsetTime: {
          years: 1,
          months: 2,
          days: 2
        },
        contact: generateProfessionalContactDetails(professionals.default.health[2]),
        organisation: professionals.default.health[2].organisation,
        details: [
          {
            key: 'Details',
            value: 'Routine immunisations administered'
          }
        ]
      },
      {
        title: 'New attendance',
        category: 'Health',
        offsetTime: {
          years: 3,
          months: 1,
          days: 12
        },
        contact: generateProfessionalContactDetails(professionals.default.health[1]),
        organisation: professionals.default.health[1].organisation,
        details: [
          {
            key: 'Details',
            value: 'Mother concerned about allergic reactions to certain foods notably those containing wheat'
          },
          {
            key: 'Outcomes',
            value: 'Mother to observe child\'s reactions to foods and return if issues continue'
          }
        ]
      },
      {
        title: 'Injury',
        category: 'Health',
        offsetTime: {
          years: 5,
          months: 6,
          days: 8
        },
        contact: generateProfessionalContactDetails(professionals.default.health[3]),
        organisation: professionals.default.health[3].organisation,
        details: [
          {
            key: 'Details',
            value: 'Child has attended A&E with a broken finger. Injury was acquired whilst playing football with friends in the garden.'
          }
        ]
      },
      {
        title: 'New attendance',
        category: 'Health',
        offsetTime: {
          years: 7,
          months: 3,
          days: 15
        },
        contact: generateProfessionalContactDetails(professionals.default.health[1]),
        organisation: professionals.default.health[1].organisation,
        details: [
          {
            key: 'Details',
            value: 'Child has experienced difficulty breathing on a number of occasions recently'
          },
          {
            key: 'Outcomes',
            value: 'Suspect child may be suffering with asthma and an inhaler has been issued'
          }
        ]
      },
      {
        title: 'Return appointment',
        category: 'Health',
        offsetTime: {
          years: 8,
          months: 1,
          days: 5
        },
        contact: generateProfessionalContactDetails(professionals.default.health[1]),
        organisation: professionals.default.health[1].organisation,
        details: [
          {
            key: 'Details',
            value: 'Child continues to experience difficulty breathing despite use of inhaler'
          },
          {
            key: 'Outcomes',
            value: 'Prescribed alternative cartridge for inhaler'
          }
        ]
      },
      {
        title: 'Return appointment',
        category: 'Health',
        offsetTime: {
          years: 10,
          months: 8,
          days: 19
        },
        contact: generateProfessionalContactDetails(professionals.default.health[1]),
        organisation: professionals.default.health[1].organisation,
        details: [
          {
            key: 'Details',
            value: 'Child has experienced a flare up in existing breathing difficulties'
          },
          {
            key: 'Outcomes',
            value: 'Prescribed alternative cartridge for inhaler'
          }
        ]
      },
      {
        title: 'Injury',
        category: 'Health',
        offsetTime: {
          years: 15,
          months: 6,
          days: 19
        },
        contact: generateProfessionalContactDetails(professionals.default.health[3]),
        organisation: professionals.default.health[3].organisation,
        details: [
          {
            key: 'Details',
            value: 'Child has experienced a moderate concussion whilst playing an organised rugby match'
          }
        ]
      },
      {
        title: 'Did not attend',
        category: 'Health',
        offsetTime: {
          years: 10,
          months: 2,
          days: 19
        },
        contact: generateProfessionalContactDetails(professionals.default.health[4]),
        organisation: professionals.default.health[4].organisation,
        details: []
      }
    ]
  }

]

exports.events = events
exports.eventTimeline = eventTimeline
