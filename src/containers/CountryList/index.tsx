import CountryListItem from '../../components/CountryListItem'

import styles from './styles.module.css'

export default function CountryList({ countries }: { countries: ICountry[] }) {
  return (
    <div className={styles.wrapper}>
      {countries.map((country: ICountry) => (
        <CountryListItem key={country.name.official} country={country} />
      ))}
    </div>
  )
}
