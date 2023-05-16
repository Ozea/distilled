import CountryList from '../containers/CountryList'
import styles from './page.module.css'

async function getCountries(): Promise<ICountry[]> {
  const res = await fetch('http://localhost:3000/api/countries')
  return res.json()
}

export default async function Countries({ params }: any) {
  const countries = await getCountries()

  return (
    <main className={styles.main}>
      <h1>Countries App</h1>

      <CountryList countries={countries} />
    </main>
  )
}
