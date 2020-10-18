import { Icon56DiamondOutline } from '@vkontakte/icons'
import { Placeholder } from '@vkontakte/vkui'
import React from 'react'
import { connect, useSelector } from 'react-redux'
import { IState } from '../../interfaces'
import { NewsCard } from '../common/NewsCard'

export const FavoritesPanelContent = connect()(() => {
  const { favorites } = useSelector((state: IState) => state.favorites)
  return (
    <div style={{
      margin: '0 auto',
      maxWidth: '1200px',
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }}>
      {
        !favorites.length
          ?
          <Placeholder icon={<Icon56DiamondOutline />}>
            Вы еще не добавили закладки
              </Placeholder>
          :
          favorites.map(f => <NewsCard {...f} />)
      }
    </div>
  )
})