import styles from './Button.module.scss'
import { ButtonLoading } from './ui/ButtonLoading.tsx'
import type { FC } from 'react'

interface ButtonProps {
  text: string
  handleClick?: () => void
  loading?: boolean
}

export const Button: FC<ButtonProps> = ({ text, handleClick, loading }) => (
  <button className={styles.button} onClick={handleClick}>
    <span>{text}</span>
    {loading ? <ButtonLoading /> : null}
  </button>
)
