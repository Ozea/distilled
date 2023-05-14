import { BASE_URL } from '@/app/constants'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') || '0')
  const size = parseInt(searchParams.get('size') || '5')
  const res = await fetch(`${BASE_URL}/all`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const response: ICountry[] = await res.json()
  const data = response.slice(page, size).map((country: ICountry) => ({
    name: country.name,
    capital: country.capital,
    population: country.population,
  }))

  const paginatedCountries: IPaginatedCountries = {
    data,
    page,
    totalCount: response.length,
  }

  return NextResponse.json(paginatedCountries)
}
