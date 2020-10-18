import { CardGrid, Group } from '@vkontakte/vkui'
import React from 'react'
import { connect, useSelector } from 'react-redux'
import { IState } from '../../interfaces'
import { NewsCard } from '../common/Card'

export const FavoritesPanelContent = connect()(() => {
  const { data, error, loading } = useSelector((state: IState) => state.news)
  return (
    <div style={{
      margin: '0 auto',
      maxWidth: '1200px',
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }}>

      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  )
})