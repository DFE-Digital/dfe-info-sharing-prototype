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
    }
  ],
  education: [
    {
      id: '1',
      firstName: 'Debbie',
      lastName: 'Harrison',
      position: 'Manager',
      category: 'education',
      organisation: organisations.default.education[1],
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
      organisation: organisations.default.education[2],
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
      organisation: organisations.default.education[3],
      category: 'education',
      contact: {
        phone: '0111 111 2233',
        email: 'm.spicer@fairwayschool.com'
      }
    }
  ],
  welfare: [
    {
      id: '1',
      firstName: '',
      lastName: '',
      position: ' ',
      organisation: organisations.default.welfare[0],
      category: '',
      contact: {
        phone: '',
        email: ''
      }
    }
  ],
  social: [
    {
      id: '1',
      firstName: '',
      lastName: '',
      position: ' ',
      organisation: organisations.default.social[0],
      category: '',
      contact: {
        phone: '',
        email: ''
      }
    }
  ]
}

exports.default = professionals
// exports.professionals = professionals
