import { ReactSVG } from 'react-svg'
import styles from './InfoPanel.module.scss'
import type { FC } from 'react'

interface InfoPanelProps {
  text: string
  icon?: string
}

export const InfoPanel: FC<InfoPanelProps> = ({ text, icon }) => (
  <div className={styles.panel}>
    {icon ? <ReactSVG style={{ height: 28 }} src={icon} /> : null}
    {text}
  </div>
)
