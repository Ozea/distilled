import { NextResponse } from 'next/server'
import { fetchCountriesByCodes, fetchCountryByName, formatPopulation, retrieveCountryFlag } from '../helpers'

const fetchBorderingCountries = async (borders: string[]): Promise<ICountryResponse[]> => {
  if (!borders) return []
  return await fetchCountriesByCodes(borders.slice(0, 4))
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const name = searchParams.get('name')

  if (!name)
    return NextResponse.json({
      code: 500,
      message: 'Search param (name) is missing.',
    })

  const response = await fetchCountryByName(name)
  const country: ICountryResponse = response
  const { name: countryName, capital, population, borders, currencies, languages } = country

  const borderingCountries: ICountryResponse[] = await fetchBorderingCountries(borders)

  const countryDetails: ICountryDetails = {
    name: countryName,
    capital,
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
