import Link from 'next/link'
import { Metadata } from 'next'

import { ICountryDetailsPageParams } from './types'

import pageStyles from '../../page.module.css'
import styles from './styles.module.css'
import CountryInformation from '@/containers/CountryInformation'

async function getCountryByName(code: string): Promise<ICountryDetails> {
  const res = await fetch(`http://localhost:3000/api/country?code=${code}`)
  return res.json()
}

export async function generateMetadata({ params }: ICountryDetailsPageParams): Promise<Metadata> {
  const countryDetails = await getCountryByName(params.country)
  const { name, population } = countryDetails

  return {
    title: `${name.common} details`,
    description: `In ${name.official} live ${population} people.`,
  }
}

export default async function Countries({ params }: ICountryDetailsPageParams) {
  const countryDetails = await getCountryByName(params.country)

  return (
    <main className={pageStyles.main}>
      <h1>Country details</h1>

      <Link href="/" className={styles.btn}>
        Back
      </Link>

      <CountryInformation {...countryDetails} />
    </main>
  )
}
