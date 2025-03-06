import { ReactSVG } from 'react-svg'
import type { FC } from 'react'

interface TeamIconProps {
  src: string
}

export const TeamIcon: FC<TeamIconProps> = ({ src }) => <ReactSVG style={{ height: 48 }} src={src} />
