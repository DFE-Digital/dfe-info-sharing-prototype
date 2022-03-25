const individuals = [
  {
    id: '1',
    firstName: 'Fred',
    lastName: 'Bloggs',
    dob: '10 Feb 2015',
    dobTimestamp: 1423558877,
    age: '7',
    uniqueIdentifier: '746-987-3432',
    gender: 'Male',
    ethnicity: 'White British',
    firstLanguage: 'English',
    address: '12 Compton Street, Townsville, Countyville, DR34 5TO',
    contacts: {
      mainContact: { id: 3 },
      gp: { id: 1 },
      education: { id: 2 }
    }
  },
  {
    id: '2',
    firstName: 'Sarah',
    lastName: 'Simpson',
    dob: '2 Oct 2010',
    dobTimestamp: 1286006477,
    age: '11',
    uniqueIdentifier: '537-173-2762',
    gender: 'Female',
    ethnicity: 'White British',
    firstLanguage: 'English',
    address: '412 Felix Road, Townsville, Countyville, DR32 7RE',
    contacts: {
      mainContact: { id: 3 },
      gp: { id: 1 },
      education: { id: 2 }
    }
  },
  {
    id: '3',
    firstName: 'Forest',
    lastName: 'Taylor',
    dob: '13 Jan 2019',
    dobTimestamp: 1547370077,
    age: '3',
    uniqueIdentifier: '987-638-9265',
    gender: 'Male',
    ethnicity: 'White British',
    firstLanguage: 'English',
    address: '412 Felix Road, Townsville, Countyville, DR32 7RE',
    contacts: {
      mainContact: { id: 3 },
      gp: { id: 1 },
      education: { id: 2 }
    }
  },
  {
    id: '4',
    firstName: 'Kai',
    lastName: 'Sutton',
    dob: '6 Mar 2006',
    dobTimestamp: 1141663103,
    age: '16',
    uniqueIdentifier: '987-638-9265',
    gender: 'Male',
    ethnicity: 'White British',
    firstLanguage: 'English',
    address: '82 Sackville Road, Townsville, Countyville, DR31 4EH',
    contacts: {
      mainContact: { id: 3 },
      gp: { id: 1 },
      education: { id: 5 }
    }
  }
]

const contacts = [
  {
    id: '1',
    type: 'health',
    title: 'Registered GP',
    name: 'Dr Paul Brookes',
    contact: {
      phone: '0111 000 000',
      email: 'drpb@doc.com',
      address: 'Townsville Clinic, \n' +
        'Main Road, \n' +
        'Townsville, \n' +
        'Countyville, \n' +
        'CT12 3ER'
    }
  },
  {
    id: '2',
    type: 'education',
    title: 'Primary school',
    name: 'Townsville primary',
    contact: {
      phone: '0111 555 555',
      email: 'info@tvprimary.com',
      address: 'Townsville primary, \n' +
        'Scotch Orchard Road, \n' +
        'Townsville, \n' +
        'Countyville, \n' +
        'CT12 7YY'
    }
  },
  {
    id: '3',
    type: 'contact',
    firstName: 'Diane',
    consent: true,
    relationship: 'Mother',
    contact: {
      phone: '07975 000141',
      landline: '0111 555222',
      email: 'd.bloggs@name.com'
    }
  },
  {
    id: '4',
    type: 'contact',
    firstName: 'Michael',
    consent: true,
    relationship: 'Father',
    contact: {
      phone: '07853 000122',
      email: 'massivefootyfan87@name.com'
    }
  },
  {
    id: '5',
    type: 'education',
    title: 'Secondary school',
    name: 'Townsville High School',
    contact: {
      phone: '0111 666 566',
      email: 'info@tvsecondary.com',
      address: 'Townsville High School, \n' +
        'Farmers Hill Road, \n' +
        'Townsville, \n' +
        'Countyville, \n' +
        'CT12 6WD'
    }
  },
]

exports.individuals = individuals
exports.contacts = contacts
