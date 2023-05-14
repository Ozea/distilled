interface ICountryResponse {
  name: ICountryName
  capital: string[]
  population: number
  flags: ICountryFlag
}

interface ICountry {
  name: ICountryName
  capital: string[]
  population: string
  flag: {
    alt: string,
    url: string,
  }
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

interface ICountryFlag {
  svg: string
  png: string
  alt: string
}
