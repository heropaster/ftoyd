import { Card } from 'components/Card'
import styles from './MatchInfo.module.scss'
import type { MatchStatus } from 'api/swagger'
import type { FC } from 'react'

interface MatchInfoProps {
  status: MatchStatus
  score: [number, number]
}

const STATUS_COLORS: Record<MatchStatus, string> = {
  Scheduled: '#EB6402',
  Finished: '#EB0237',
  Ongoing: '#43AD28',
}

export const MatchInfo: FC<MatchInfoProps> = ({ status, score }) => {
  const [firstTeamScore, secondTeamScore] = score

  return (
    <div className={styles.container}>
      <span className={styles.score}>
        {firstTeamScore} : {secondTeamScore}
      </span>
      <Card background={STATUS_COLORS[status]}>{status}</Card>
    </div>
  )
}
