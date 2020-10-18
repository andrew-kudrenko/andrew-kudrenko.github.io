import { Spinner } from '@vkontakte/vkui'
import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { IState } from '../../interfaces'
import { fetchNews } from '../../redux/actions'
import { EmptyPlaceholder } from '../common/EmptyPlaceholder'
import { ErrorNotice } from '../common/ErrorNotice'
import { NewsCard } from '../common/NewsCard'

export const FeedPanelContent = connect()(() => {
  const { data, error, loading } = useSelector((state: IState) => state.news)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchNews())
  }, [])

  return (
    <div style={{
      margin: '0 auto',
      maxWidth: '1200px',
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }}>
      {
        error
        ?
          <ErrorNotice />
        :
          loading
          ?
            <Spinner size="large" />
          :
            !data.length
            ?
              <EmptyPlaceholder />
            :
              data.map(n => <NewsCard {...n} />)
      }
    </div>
  )
})