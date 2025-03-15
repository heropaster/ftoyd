import { useMemo } from 'react'
import { getMatchKey } from 'components/Main/utils/getMatchKey.ts'
import { MatchLine } from 'components/MatchLine'
import { LoadingSpinner } from 'components/shared/LoadingSpinner'
import { useFetchMatches } from 'hooks/api/useFetchMatches.ts'
import styles from './Main.module.scss'

export const Main = () => {
  const { data, isFetching } = useFetchMatches()
  const matches = useMemo(() => data?.data.data.matches ?? [], [data?.data.data.matches])

  if (isFetching) {
    return <LoadingSpinner />
  }
  return (
    <div className={styles.container}>
      {matches.map((match) => (
        <MatchLine
          key={getMatchKey(match.time)}
          teams={[match.homeTeam, match.awayTeam]}
          score={[match.homeScore, match.awayScore]}
          status={match.status}
        />
      ))}
    </div>
  )
}
