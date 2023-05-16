export const BASE_URL = 'https://restcountries.com/v3.1'

export const formatPopulation = (population: number): string => {
  return population.toLocaleString('en-US')
}

export async function fetchCountryByName(name: string): Promise<ICountryResponse> {
  const req = await fetch(`${BASE_URL}/name/${name}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const response: ICountryResponse[] = await req.json()
  return response[0]
}

export async function fetchCountryByCode(code: string): Promise<ICountryResponse[]> {
  const req = await fetch(`${BASE_URL}/alpha?codes=${code}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return await req.json()
}

export async function fetchCountriesByCodes(codes: string[]): Promise<ICountryResponse[]> {
  const req = await fetch(`${BASE_URL}/alpha?codes=${codes.join(',')}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return await req.json()
}

export function retrieveCountryFlag(country: ICountryResponse): IFlag {
  const { flags, name } = country
  return {
    url: flags.svg || flags.png,
    alt: flags.alt || `Country - ${name.official}`,
  }
}
