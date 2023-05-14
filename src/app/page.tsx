import styles from './page.module.css'

async function getCountries(): Promise<IPaginatedCountries> {
  const res = await fetch('http://localhost:3000/api/countries')
  return res.json()
}

export default async function Countries({ params }: any) {
  const countries = await getCountries()

  return (
    <main className={styles.main}>
      <h1>Countries APP</h1>

      {countries.data.map((country: ICountry) => (
        <div key={country.name.official}>{country.name.official}</div>
      ))}
    </main>
  )
}
