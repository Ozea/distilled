'use client'

import styles from './styles.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function CountryListItem({ country }: { country: ICountry }) {
  const { name, capital, flag, population } = country

  return (
    <Link href={`/${country.name.common}`} className={styles.wrapper}>
      <div className={styles.row}>
        <Image src={flag.url} alt={flag.alt} width={100} height={60} className={styles.image} />
        <div className={styles.column}>
          <b>
            {name.common}, {capital}
          </b>
          <span>Population: {population}</span>
        </div>
      </div>
    </Link>
  )
}
