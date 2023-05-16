import Link from 'next/link'
import { ICountryDetailsPageParams } from './types'

import pageStyles from '../../page.module.css'
import styles from './styles.module.css'
import CountryInformation from '@/app/containers/CountryInformation'

async function getCountryByName(name: string): Promise<ICountryDetails> {
  const res = await fetch(`http://localhost:3000/api/country?name=${name}`)
  return res.json()
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
