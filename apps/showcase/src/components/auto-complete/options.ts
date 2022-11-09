import data from './data.json'

export interface Country {
  id: string
  name: string
}

export const countryList: Country[] = data.map((country) => ({
  id: country.alpha2,
  name: country.name,
}))
