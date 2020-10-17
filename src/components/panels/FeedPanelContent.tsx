import { CardGrid, Group } from '@vkontakte/vkui'
import React from 'react'
import { ICategory } from '../../interfaces'
import { NewsCard } from '../common/Card'

interface IFeedPanelContent {
  categories: ICategory[]
}

export const FeedPanelContent: React.FC<IFeedPanelContent> = ({ categories }) => {
  return (
    <>
    <CardGrid>
      <Group>
        <NewsCard />      
        <NewsCard />      
        <NewsCard />      
        <NewsCard />      
        <NewsCard />      
        <NewsCard />      
      </Group>
    </CardGrid>
    </>
  )
}