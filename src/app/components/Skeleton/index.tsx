import { classNames } from '@/app/helpers/classNames'
import styles from './styles.module.css'

export default function Skeleton({ className }: { className?: string }) {
  return <div className={classNames(styles.skeleton, className)}></div>
}
