const organisations = {
  health: [
    {
      id: '1',
      category: 'health',
      title: 'Royal Townsville Hospital',
      system: 'EHM',
      address: {
        line1: '165 George Street',
        town: 'Townsville',
        postcode: 'TV3 9IP'
      },
      contact: {
        phone: '0111 2453 6772',
        email: 'enquiries@rt.hospital.com'
      }
    },
    {
      id: '2',
      category: 'health',
      title: 'Townsville Surgery',
      system: 'EHM',
      address: {
        line1: '2 The Crescent',
        town: 'Townsville',
        postcode: 'TV3 7GB'
      },
      contact: {
        phone: '0111 6534 2311',
        email: 'reception@tgp.com'
      }
    }
  ],
  education: [
    {
      id: '1',
      category: 'education',
      title: 'Busy Bees Nursery',
      system: 'NEWAPP-2000',
      address: {
        line1: '88 Stanley Road',
        town: 'Townsville',
        postcode: 'TV2 3QW'
      },
      contact: {
        phone: '0111 4412 2217'
      }
    },
    {
      id: '2',
      category: 'education',
      title: 'Netherstowe Primary School',
      system: 'EDU-1',
      address: {
        line1: '18 Stanley Road',
        town: 'Townsville',
        postcode: 'TV2 3QW'
      },
      contact: {
        phone: '0111 4412 2217',
        email: 'office@netherstoweschool.com'
      }
    },
    {
      id: '3',
      category: 'education',
      title: 'Fairway High School',
      system: 'EDU-1',
      address: {
        line1: '9 Kemp Avenue',
        town: 'Townsville',
        postcode: 'TV2 5RW'
      },
      contact: {
        phone: '0111 2111 2233',
        email: 'office@fairwayschool.com'
      }
    },
    {
      id: '4',
      category: 'education',
      title: 'St Lukes High School',
      system: 'EDU-1',
      address: {
        line1: '103 Chase Place',
        town: 'Townsville',
        postcode: 'TV3 9TC'
      },
      contact: {
        phone: '0111 3442 3231',
        email: 'contact@stlukes-townsville.com'
      }
    }
  ],
  welfare: [],
  social: []
}

exports.default = organisations
