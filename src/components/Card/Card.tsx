import styles from './Card.module.scss'
import type { FC, PropsWithChildren } from 'react'

interface CardProps extends PropsWithChildren {
  background: string
}

export const Card: FC<CardProps> = ({ children, background }) => (
  <div style={{ backgroundColor: background }} className={styles.card}>
    {children}
  </div>
)
