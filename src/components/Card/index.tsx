import { PropsWithChildren } from 'react'
import { classNames } from '@/helpers/classNames'

import styles from './styles.module.css'

interface ICardProps {
  className?: string
}

export default function Card(props: PropsWithChildren<ICardProps>) {
  return <div className={classNames(styles.card, props.className)}>{props.children}</div>
}
