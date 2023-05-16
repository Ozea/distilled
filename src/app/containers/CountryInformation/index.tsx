import Card from '@/app/components/Card'
import CountryDetails from '@/app/components/CountryDetails'
import Image from 'next/image'

import BorderingCountryList from './BorderingCountryList'

import styles from './styles.module.css'

export default function CountryInformation(countryDetails: ICountryDetails) {
  const { flag, borders } = countryDetails

  return (
    <>
      <Card className={styles.detailsWrapper}>
        <Image src={flag.url} alt={flag.alt} width={225} height={125} className={styles.img} />
        <CountryDetails {...countryDetails} />
      </Card>

      <BorderingCountryList borders={borders} />
    </>
  )
}
