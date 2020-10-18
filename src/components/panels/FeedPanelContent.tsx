import React from 'react'
import { connect, useSelector } from 'react-redux'
import { IState } from '../../interfaces'
import { NewsCard } from '../common/NewsCard'

export const FeedPanelContent = connect()(() => {
  const { data, error, loading } = useSelector((state: IState) => state.news)
  
  return (
    <div style={{
      margin: '0 auto',
      maxWidth: '1200px',
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }}>
      {
        data.map(n => <NewsCard {...n} />)
      }
    </div>
  )
})