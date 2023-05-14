import { NextResponse } from 'next/server';

const BASE_URL = 'https://restcountries.com/v3.1'
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');
  const res = await fetch(`${BASE_URL}/name/${name}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const response: ICountry[] = await res.json();
  const country: ICountry = response[0]
  const countryDetails: ICountry = {
    name: country.name,
    capital: country.capital,
    population: country.population,
  }
 
  return NextResponse.json(countryDetails);
}