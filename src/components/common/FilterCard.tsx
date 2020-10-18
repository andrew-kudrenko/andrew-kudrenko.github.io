import { Button, Card, Div, Group, Header, Separator, SimpleCell } from '@vkontakte/vkui'
import React from 'react'
import { INewsFilter } from '../../interfaces'

export const FilterCard: React.FC<INewsFilter> = ({ title, city, date, region, source, category }) => {
  return (
    <Card
      size="l" 
      mode="outline"
      style={{ 
        minWidth: '300px',
        maxWidth: '350px', 
        margin: '.5rem',
        zIndex: -1
      }}
    >
      <Div>
        <Header>{title}</Header>
        <Separator />
        {
          (region || city) &&
          <Group>
              {region && <SimpleCell>Регион: {region.title}</SimpleCell>}
              {city && <SimpleCell>Населенный пункт: {city.title}</SimpleCell>}
          </Group>
        }
        {source && <SimpleCell>Источник: {source}</SimpleCell>}
        {date && <SimpleCell>Дата: {date.toLocaleDateString()}</SimpleCell>}
        {category && <SimpleCell>Категории: {category.name}</SimpleCell>}
        <Button mode="secondary" size="xl">
          Добавить сообщество
        </Button>
      </Div>
    </Card>
  )
}