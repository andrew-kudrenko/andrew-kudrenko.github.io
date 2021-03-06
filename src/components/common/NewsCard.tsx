import { Card, Div, Title, Text, Button, Group } from '@vkontakte/vkui'
import React from 'react'
import { useDispatch } from 'react-redux'
import { INews } from '../../interfaces'
import { addToFavorites } from '../../redux/actions'

export const NewsCard: React.FC<INews> = props => {
  const dispatch = useDispatch()

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
        <Title weight="medium" level="3">
          {new Date(props.added).toLocaleDateString()}
        </Title>
        {
          props.photo &&
          <img
            src={props.photo}
            width="100%"
            alt="news"
          />
        }
        <Group style={{ marginBottom: '.5rem' }}>
          <Text weight="regular">{props.text}</Text>
        </Group>
        {
          props.video &&
          <video>
            <source src={props.video} />
          </video>
        }
        <Button 
          mode="secondary" 
          size="xl" 
          style={{ marginTop: 'auto' }}
          onClick={dispatch.bind(null, addToFavorites(props))}
        >В избранное</Button>
      </Div>
    </Card>
  )
}