import { Header } from 'components/Header'
import { Main } from 'components/Main'
import styles from './App.module.scss'

export const App = () => (
  <div className={styles.container}>
    <Header />
    <Main />
  </div>
)
