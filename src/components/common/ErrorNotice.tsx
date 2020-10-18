import { FormStatus } from '@vkontakte/vkui'
import React from 'react'

export const ErrorNotice = () =>
  <FormStatus
    mode="error"
    header="Ошибка при подключении к серверу"
  >
    Ошибка при загрузке данных
  </FormStatus>