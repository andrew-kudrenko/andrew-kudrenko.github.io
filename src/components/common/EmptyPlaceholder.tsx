import { Icon36CalendarOutline } from '@vkontakte/icons'
import { Placeholder } from '@vkontakte/vkui'
import React from 'react'

export const EmptyPlaceholder: React.FC = () =>
  <Placeholder
    icon={<Icon36CalendarOutline />}
  >
    Пока здесь ничего нет
  </Placeholder>