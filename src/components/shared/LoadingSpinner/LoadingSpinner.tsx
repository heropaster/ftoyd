import clsx from 'clsx'
import { MoonLoader } from 'react-spinners'
import styles from './LoadingSpinner.module.scss'
import type { FC } from 'react'

interface LoadingProps {
  overlay?: boolean
}

export const LoadingSpinner: FC<LoadingProps> = ({ overlay }) => (
  <div className={clsx(styles.loadingSpinner, { [styles.loadingSpinnerOverlay]: overlay })}>
    <MoonLoader color={'#fff'} />
  </div>
)
