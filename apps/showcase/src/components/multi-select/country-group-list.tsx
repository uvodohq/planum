// countries list
export const countryGroupList = [
  {
    name: 'Aurope',
    children: [
      'Afghanistan',
      'Albania',
      'Algeria',
      'American Samoa',
      'Andorra',
      'Angola',
      'Anguilla',
      'Antarctica',
      'Antigua and Barbuda',
      'Argentina',
      'Aruba',
    ],
  },
  {
    name: 'Asia',
    children: [
      'Australia',
      'Austria',
      'Azerbaijan',
      'Bahamas',
      'Bahrain',
      'Bangladesh',
      'Barbados',
      'Belarus',
    ],
  },
  {
    name: 'America',
    children: [
      'Belgium',
      'Belize',
      'Benin',
      'Bermuda',
      'Bhutan',
      'Bolivia',
      'Bosnia and Herzegovina',
      'Botswana',
      'Bouvet Island',
      'Brazil',
    ],
  },
  {
    name: 'Africa',
    children: [
      'British Indian Ocean Territory',
      'Brunei Darussalam',
      'Bulgaria',
      'Burkina Faso',
      'Burundi',
      'Cambodia',
      'Cameroon',
      'Canada',
      'Cape Verde',
      'Cayman Islands',
    ],
  },
  {
    name: 'Australia',
    children: ['Zelandiya'],
  },
].map((group) => ({
  id: group.name,
  name: group.name,
  children: group.children.map((sub) => ({
    id: sub,
    name: sub,
    countryCode: sub.slice(0, 2).toLowerCase(),
  })),
}))
