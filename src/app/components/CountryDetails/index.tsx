import styles from './styles.module.css'

export default function CountryDetails({ name, capital, population, currency, languages }: ICountryDetails) {
  return (
    <div className={styles.details}>
      <h2 className={styles.heading}>{name.common}</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <strong>Capital:</strong> {capital}
        </li>
        <li className={styles.listItem}>
          <strong>Population:</strong> {population}
        </li>
        <li className={styles.listItem}>
          <strong>Currencies:</strong> {currency.join(', ')}
        </li>
        <li className={styles.listItem}>
          <strong>Languages:</strong> {languages.join(', ')}
        </li>
      </ul>
    </div>
  )
}
