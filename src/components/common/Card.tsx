import { Card, Div, Title, Text, Button, Separator, Group } from '@vkontakte/vkui'
import React from 'react'

interface INewsCard {
  title: string
  text: string
  source: string
  date: Date
  image?: string
  video?: string
}

export const NewsCard: React.FC = () => {
  return (
    <Card 
        size="l" 
        mode="outline"
        style={{ 
          minWidth: '300px',
          maxWidth: '350px', 
          margin: '.5rem'
        }}
      >
        <Div>
          <Title level="3" weight="medium" style={{ marginBottom: '.5rem' }}>
            Заголовок события
          </Title>
          <img 
            width="100%"
            src="https://www.prorobot.ru/gallery/foto/11110043546.jpg" 
          />
          <Group style={{ marginBottom: '.5rem' }}>  
            <Text weight="regular">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Suscipit, laudantium laboriosam? Ab enim optio doloribus 
              quasi possimus similique, commodi distinctio voluptas 
              laboriosam consectetur esse nihil officiis fuga non, 
              error eum!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Suscipit, laudantium laboriosam? Ab enim optio doloribus 
              quasi possimus similique, commodi distinctio voluptas 
              laboriosam consectetur esse nihil officiis fuga non, 
              error eum!
            </Text>
            <Text weight="medium">
              Белгородская область, Белгород
            </Text>
          </Group>
          <Button mode="secondary" size="xl">В избранное</Button>
        </Div>
      </Card>
  )
}