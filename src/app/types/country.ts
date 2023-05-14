interface ICountry {
  name: ICountryName
  capital: string[]
  population: number
}

interface ICountryName {
  common: string
  official: string
}

interface IPaginatedCountries {
  data: ICountry[]
  page: number
  totalCount: number
}
