import { NextResponse } from 'next/server'
import { fetchCountriesByCodes, fetchCountryByCode, formatPopulation, retrieveCountryFlag } from '../helpers'

const fetchBorderingCountries = async (borders: string[]): Promise<ICountryResponse[]> => {
  if (!borders) return []
  return await fetchCountriesByCodes(borders.slice(0, 4))
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  if (!code) {
    return NextResponse.json({
      code: 500,
      message: 'Search param (code) is missing.',
    })
  }

  const response = await fetchCountryByCode(code)
  const country: ICountryResponse = response[0]
  const { name, capital, population, borders, currencies, languages, cca2, cca3, ccn3, cioc } = country

  const borderingCountries: ICountryResponse[] = await fetchBorderingCountries(borders)

  const countryDetails: ICountryDetails = {
    name,
    capital,
    code,
    population: formatPopulation(population),
    flag: retrieveCountryFlag(country),
    borders: borderingCountries.map((borderingCountry: ICountryResponse) => ({
      name: borderingCountry.name,
      population: formatPopulation(borderingCountry.population),
      flag: retrieveCountryFlag(borderingCountry),
    })),
    currency: Object.values(currencies).map((currency) => currency.name),
    languages: Object.values(languages),
  }

  return NextResponse.json(countryDetails)
}
