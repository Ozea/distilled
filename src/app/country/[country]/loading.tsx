import Skeleton from '@/app/components/Skeleton'

import styles from './styles.module.css'

export default function CountryDetailsLoading() {
  return (
    <>
      <Skeleton className={styles.skeletonHeading} />

      <Skeleton className={styles.skeletonCountryInformation} />

      <Skeleton className={styles.skeletonHeading} />

      <div className={styles.skeletonWrapper}>
        <Skeleton className={styles.skeletonWrapperItem} />
        <Skeleton className={styles.skeletonWrapperItem} />
        <Skeleton className={styles.skeletonWrapperItem} />
        <Skeleton className={styles.skeletonWrapperItem} />
      </div>
    </>
  )
}
