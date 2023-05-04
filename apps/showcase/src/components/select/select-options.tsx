import { ArrowsDownUpIcon } from '@uvodohq/planum-icons'

// countries list
export const countryList = [
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
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
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
].map((item, index) => ({
  id: index + 1,
  name: item,
}))

export const weightUnits = [
  {
    name: 'kg',
    id: 1,
  },
  {
    name: 'gr',
    id: 3,
  },
  {
    name: 'os',
    id: 4,
  },
  {
    name: 'ton',
    id: 5,
  },
]

export const statusList = [
  {
    id: 1,
    name: 'Published',
    rightIcon: <ArrowsDownUpIcon />,
  },
  {
    id: 3,
    name: 'Draft',
  },
  {
    id: 4,
    name: 'Pending',
  },
]
