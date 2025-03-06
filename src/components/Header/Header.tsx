import { useMemo } from 'react'
import alert from 'assets/icons/Alert.svg'
import { InfoPanel } from 'components/InfoPanel'
import { Button } from 'components/shared/Button'
import { Title } from 'components/shared/Title'
import { useFetchMatches } from 'hooks/api/useFetchMatches.ts'
import styles from './Header.module.scss'

export const Header = () => {
  const { isFetching, refetch, status } = useFetchMatches()
  const infoPanelText = useMemo(
    () => (isFetching ? 'Информация загружается' : 'Информация успешно загружена'),
    [isFetching],
  )

  return (
    <div className={styles.container}>
      <Title className={styles.title}>Match Tracker</Title>
      <div className={styles.actions}>
        <InfoPanel
          icon={status === 'error' ? alert : undefined}
          text={status === 'error' ? 'Ошибка: не удалось загрузить информацию' : infoPanelText}
        />
        <Button handleClick={refetch} text={'Обновить'} loading={isFetching} />
      </div>
    </div>
  )
}
