import { Button } from '@vkontakte/vkui'
import React from 'react'
import { useTheme } from '../../hooks/useTheme'

export const ProfilePanelContent: React.FC = () => {
  const { toggleTheme } = useTheme()

  return (
    <>
      <Button onClick={toggleTheme}>Сменить тему</Button>
    </>
  )
}