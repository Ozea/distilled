import { BASE_URL } from '@/app/constants'
import { NextResponse } from 'next/server'
import { formatPopulation } from '../helpers'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') || '0')
  const size = parseInt(searchParams.get('size') || '20')
  const res = await fetch(`${BASE_URL}/all`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const response: ICountryResponse[] = await res.json()
  const data: ICountry[] = response.slice(page, size).map((country: ICountryResponse) => {
    const { name, capital, population, flags } = country
    return {
      name,
      capital,
      population: formatPopulation(population),
      flag: {
        url: flags.svg || flags.png,
        alt: flags.alt || `Country - ${country.name.official}`,
      },
    }
  })

  const paginatedCountries: IPaginatedCountries = {
    data,
    page,
    totalCount: response.length,
  }

  return NextResponse.json(paginatedCountries)
}
