import { Icon24Cancel, Icon24Done } from '@vkontakte/icons'
import { ModalRoot, ModalPage, ModalPageHeader, FormLayout, FormLayoutGroup, Select, Input, PanelHeaderButton, usePlatform, IOS, ANDROID, Button } from '@vkontakte/vkui'
import React, { useState } from 'react'

interface IFilterModalProps {
  modal: string | null
  setModal: (m: string | null) => void
}


export const FilterModal: React.FC<IFilterModalProps> = ({ modal = null, setModal }) => {
  const [] = useState<string>('')
  const [city] = useState<string>('')
  const [] = useState<string>('')
  const [] = useState<Date>()
  const [] = useState<Date>()
  const [] = useState<string>('')

  const platform = usePlatform()

  return (
    <ModalRoot activeModal={modal}>
      <ModalPage
        id="filters"
        header={
          <ModalPageHeader
            left={
              <>
                {
                  platform === ANDROID &&
                  <PanelHeaderButton onClick={setModal.bind(null, null)}>
                    <Icon24Cancel />
                  </PanelHeaderButton>
                }
              </>
            }
            right={(
              <>
                {
                  platform === ANDROID &&
                  <PanelHeaderButton onClick={setModal.bind(null, null)}>
                    <Icon24Done />
                  </PanelHeaderButton>
                }
                {
                  platform === IOS &&
                  <PanelHeaderButton onClick={setModal.bind(null, null)}>
                    Готово
                  </PanelHeaderButton>
                }
              </>
            )}
          >
            Фильтры
          </ModalPageHeader>
        }
        onClose={setModal.bind(null, null)}
      >
        <FormLayout>
          <FormLayoutGroup top="Геолокация">
            <Select placeholder="Выберите регион"></Select>
            <Select
              placeholder="Выберите город"
              disabled={!city}
            ></Select>
          </FormLayoutGroup>
          <Select top="Источник" placeholder="Выберите источник"></Select>
          <FormLayoutGroup top="Дата и время">
            <Input type="date" placeholder="Выберите дату" />
            <Input type="time" placeholder="Выберите время" />
          </FormLayoutGroup>
          <Select top="Категория" placeholder="Выберите категорию контента"></Select>
        </FormLayout>
      </ModalPage>
    </ModalRoot>
  )
}