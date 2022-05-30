const organisations = require('./organisations')

const professionals = {
  health: [
    {
      id: '1',
      firstName: 'Susan',
      lastName: 'Brady',
      position: 'Health Visitor',
      category: 'health',
      organisation: organisations.default.health[0],
      contact: {
        phone: '07765437682',
        email: 's.brady@h.hospital.com'
      }
    },
    {
      id: '2',
      firstName: 'Selena',
      lastName: 'Khalid',
      position: 'General Practitioner',
      category: 'health',
      currentlyInvolved: true,
      organisation: organisations.default.health[1],
      contact: {
        phone: '07765437682',
        email: 'dr.s.khalid@tgp.com'
      }
    },
    {
      id: '3',
      firstName: 'Tom',
      lastName: 'Mackenzie',
      position: 'Senior nurse',
      category: 'health',
      organisation: organisations.default.health[1],
      contact: {
        phone: '07767520910',
        email: 't.mackenzie@tgp.com'
      }
    },
    {
      id: '4',
      firstName: 'Michael',
      lastName: 'Smith',
      position: 'Administrative assistant',
      category: 'health',
      organisation: organisations.default.health[2],
      contact: {
        phone: '0111 7266 9277 (ext. 33)',
        email: 'm.smith@h.hospital.com'
      }
    },
    {
      id: '5',
      firstName: 'Jeremy',
      lastName: 'Kinder',
      position: 'Dentist',
      category: 'health',
      organisation: organisations.default.health[3],
      contact: {
        phone: '0111 3322 5433 (ext. 3)',
        email: 'j.kinder@tvdental.com'
      }
    }
  ],
  education: [
    {
      id: '1',
      firstName: 'Debbie',
      lastName: 'Harrison',
      position: 'Manager',
      category: 'education',
      organisation: organisations.default.education[0],
      contact: {
        phone: '0111 7625 2266'
      }
    },
    {
      id: '2',
      firstName: 'John',
      lastName: 'Ball',
      position: 'Head Teacher',
      category: 'education',
      organisation: organisations.default.education[1],
      contact: {
        phone: '0111 7625 2266',
        email: 'j.ball@netherstoweschool.com'
      }
    },
    {
      id: '3',
      firstName: 'Mary',
      lastName: 'Spicer',
      position: 'Head Teacher',
      organisation: organisations.default.education[2],
      category: 'education',
      contact: {
        phone: '0111 111 2233',
        email: 'm.spicer@fairwayschool.com'
      }
    },
    {
      id: '4',
      firstName: 'Simon',
      lastName: 'Trench',
      position: 'Head Teacher',
      organisation: organisations.default.education[3],
      category: 'education',
      contact: {
        phone: '0111 3442 3231 (ext. 23)',
        email: 'simon.trench@stlukes-townsville.com'
      }
    },
    {
      id: '5',
      firstName: 'Sarah',
      lastName: 'MacDonald',
      position: 'Head Teacher',
      category: 'education',
      organisation: organisations.default.education[1],
      contact: {
        phone: '0111 7625 2266',
        email: 's.macdonald@netherstoweschool.com'
      }
    }
  ],
  welfare: [
    {
      id: '1',
      firstName: 'Sam',
      lastName: 'Yardie',
      position: 'Community Support Officer',
      organisation: organisations.default.welfare[0],
      category: 'welfare',
      contact: {
        phone: '0111 2652 8266',
        email: 'sam.yardie@townsville.police.gov.uk'
      }
    }
  ],
  social: [
    {
      id: '1',
      firstName: 'Mohammed',
      lastName: 'Stevens',
      position: 'Liaison Officer',
      organisation: organisations.default.social[0],
      category: 'social',
      contact: {
        phone: '077453627876',
        email: 'm.stevens@thetfs.co.uk'
      }
    }
  ]
}

exports.default = professionals
// exports.professionals = professionals
