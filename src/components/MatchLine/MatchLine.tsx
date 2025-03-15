import teamIcon from 'assets/icons/Team.svg'
import { MatchInfo } from 'components/MatchLine/ui/MatchInfo/MatchInfo.tsx'
import { TeamInfo } from 'components/MatchLine/ui/TeamInfo/TeamInfo.tsx'
import styles from './MatchLine.module.scss'
import type { MatchStatus, Team } from 'api/swagger'
import type { FC } from 'react'

interface MatchLineProps {
  teams: [Team, Team]
  score: [number, number]
  status: MatchStatus
}

export const MatchLine: FC<MatchLineProps> = ({ teams, score, status }) => {
  const [homeTeam, awayTeam] = teams

  return (
    <div className={styles.container}>
      <TeamInfo teamName={homeTeam.name} teamIcon={teamIcon} />
      <MatchInfo status={status} score={score} />
      <TeamInfo teamName={awayTeam.name} teamIcon={teamIcon} isAwayTeam={true} />
    </div>
  )
}
