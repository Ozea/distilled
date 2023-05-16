interface ICountryResponse {
  name: ICountryName
  capital: string[]
  population: number
  flags: ICountryFlag
  borders: string[]
  cioc: string
  languages: {
    [key: string]: string
  }
  currencies: {
    [key: string]: {
      name: string
      symbol: string
    }
  }
}

interface ICountryDetails extends ICountry {
  borders: IBorderingCountry[]
  currency: string[]
  languages: string[]
}

interface IBorderingCountry {
  name: ICountryName
  population: string
  flag: IFlag
}

interface ICountry {
  name: ICountryName
  capital: string[]
  population: string
  flag: IFlag
  cioc: string
}

interface ICountryName {
  common: string
  official: string
}

interface ICountryFlag {
  svg: string
  png: string
  alt: string
}

interface IFlag {
  alt: string
  url: string
}
