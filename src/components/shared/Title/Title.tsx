import clsx from 'clsx'
import styles from './Title.module.scss'
import type { FC, JSX, PropsWithChildren } from 'react'

interface TitleProps extends PropsWithChildren {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
}

export const Title: FC<TitleProps> = ({ level, children, className }) => {
  const TitleTag = `h${level}` as keyof JSX.IntrinsicElements

  return <TitleTag className={clsx(styles.title, className)}>{children}</TitleTag>
}
