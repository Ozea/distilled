import BorderingCountry from '@/components/BorderingCountry'

import styles from './styles.module.css'

export default function BorderingCountryList({ borders }: { borders: IBorderingCountry[] }) {
  if (!borders.length) return <></>

  return (
    <>
      <h3>Bordering countries</h3>

      <div className={styles.borders}>
        {borders.map((border) => (
          <BorderingCountry key={border.name.official} {...border} />
        ))}
      </div>
    </>
  )
}
