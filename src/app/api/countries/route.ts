import { BASE_URL } from '@/constants'
import { NextResponse } from 'next/server'
import { formatPopulation, retrieveCountryFlag } from '../helpers'

export async function GET(request: Request) {
  const res = await fetch(`${BASE_URL}/all`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const response: ICountryResponse[] = await res.json()
  const countries: ICountry[] = response.map((country: ICountryResponse) => {
    const { name, capital, population, cca2, cca3, ccn3, cioc } = country
    return {
      name,
      capital,
      code: cca2 || cca3 || ccn3 || cioc,
      population: formatPopulation(population),
      flag: retrieveCountryFlag(country),
    }
  })

  return NextResponse.json(countries)
}
