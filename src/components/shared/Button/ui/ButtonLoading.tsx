import { ReactSVG } from 'react-svg'
import refreshIcon from 'assets/icons/Refresh.svg'
import styles from './ButtonLoading.module.scss'

export const ButtonLoading = () => <ReactSVG className={styles.loading} src={refreshIcon} />
