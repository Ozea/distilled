'use client'

import Image from 'next/image'
import Link from 'next/link'

import styles from './styles.module.css'
import Card from '../Card'

export default function CountryListItem({ country }: { country: ICountry }) {
  const { name, capital, flag, population } = country

  return (
    <Card className={styles.card}>
      <Link href={`/country/${country.name.common}`} className={styles.wrapper}>
        <div className={styles.row}>
          <Image src={flag.url} alt={flag.alt} width={85} height={60} className={styles.image} />
          <div className={styles.column}>
            <b>
              {name.common}, {capital}
            </b>
            <span>Population: {population}</span>
          </div>
        </div>
      </Link>
    </Card>
  )
}
