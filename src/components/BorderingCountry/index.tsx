import Image from 'next/image'
import Card from '../Card'

import styles from './styles.module.css'

export default function BorderingCountry({ name, flag, population }: IBorderingCountry) {
  return (
    <Card className={styles.border} key={name.official}>
      <Image src={flag.url} alt={flag.alt} width={75} height={50} className={styles.img} />
      <strong>{name.common}</strong>
      <span>
        <strong>Population:</strong> {population}
      </span>
    </Card>
  )
}
