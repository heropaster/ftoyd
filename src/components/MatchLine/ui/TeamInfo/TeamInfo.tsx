import clsx from 'clsx'
import { TeamIcon } from 'components/shared/ui/icons/TeamIcon.tsx'
import styles from './TeamInfo.module.scss'
import type { FC } from 'react'

interface TeamInfoProps {
  isAwayTeam?: boolean
  teamName: string
  teamIcon: string
}

export const TeamInfo: FC<TeamInfoProps> = ({ teamName, teamIcon, isAwayTeam }) => (
  <div className={clsx(styles.teamContainer, { [styles.right]: isAwayTeam })}>
    <TeamIcon src={teamIcon} />
    <span>{teamName}</span>
  </div>
)
