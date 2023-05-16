import Skeleton from '@/components/Skeleton'

import styles from './page.module.css'

export default function CountryDetailsLoading() {
  return (
    <main className={styles.main}>
      <Skeleton className={styles.skeletonHeading} />

      <div className={styles.skeletonWrapper}>
        {Array.from(Array(25)).map((i) => (
          <Skeleton className={styles.skeletonWrapperItem} key={i} />
        ))}
      </div>
    </main>
  )
}
