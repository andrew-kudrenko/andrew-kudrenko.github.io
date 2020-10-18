import { Icon24Cancel } from '@vkontakte/icons'
import { ModalRoot, ModalPage, ModalPageHeader, FormLayout, FormLayoutGroup, Select, Input, PanelHeaderButton } from '@vkontakte/vkui'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ICategory, ICity, INewsFilter, IRegion, IState } from '../../interfaces'
import { createFilter } from '../../redux/actions'

interface IFilterModalProps {
  modal: string | null
  setModal: (m: string | null) => void
}


export const FilterModal: React.FC<IFilterModalProps> = ({ modal = null, setModal }) => {
  const dispatch = useDispatch()

  const { data: regionsData } = useSelector((state: IState) => state.regions)
  const { data: citiesData } = useSelector((state: IState) => state.cities)
  const { data: categoriesData } = useSelector((state: IState) => state.categories)

  const [title, setTitle] = useState<string>('')
  const [region, setRegion] = useState<IRegion>()
  const [city, setCity] = useState<ICity>()
  const [source, setSource] = useState<string>('VK')
  const [date] = useState<Date>(new Date())
  const [category, setCategory] = useState<ICategory>()


  const handleSelectOrInputChange = (callback: (value: any) => void) =>
    (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => callback(event.target.value)

  const createFilterHandler = () => {
    const filter: INewsFilter = { title, category, city, date, region, source }    

    dispatch(createFilter(filter))
  }

  const formIsCorrect = Boolean(title)

  return (
    <ModalRoot activeModal={modal}>
      <ModalPage
        id="filters"
        header={
          <ModalPageHeader
            left={
              <PanelHeaderButton onClick={setModal.bind(null, null)}>
                <Icon24Cancel />
              </PanelHeaderButton>
            }
            right={
              <PanelHeaderButton
                onClick={() => {
                  createFilterHandler()
                  setModal(null)
                }}
                disabled={!formIsCorrect}
              >
                Создать
              </PanelHeaderButton>
            }
          >
            Фильтры
          </ModalPageHeader>
        }
        onClose={setModal.bind(null, null)}
      >
        <FormLayout>
          <Input
            top="Название"
            placeholder="Придумайте название для ленты"
            value={title}
            onChange={handleSelectOrInputChange(setTitle)}
          />
          <FormLayoutGroup top="Геолокация">
            <Select
              placeholder="Выберите регион"
              onChange={handleSelectOrInputChange(setRegion)}
            >
              {
                regionsData.map(r =>
                  <option
                    key={r.id}
                    value={r.id}
                  >
                    {r.title}
                  </option>
                )
              }
            </Select>
            <Select
              placeholder="Выберите город"
              disabled={!region}
              onChange={handleSelectOrInputChange(setCity)}
            >
              {
                citiesData.map(c =>
                  <option
                    key={c.id}
                    value={c.id}
                  >
                    {c.title}
                  </option>
                )
              }
            </Select>
          </FormLayoutGroup>
          <Select
            top="Источник"
            placeholder="Выберите источник"
            onChange={handleSelectOrInputChange(setSource)}
          >
            {
              <option value={source}>
                {source}
              </option>
            }
          </Select>
          <FormLayoutGroup top="Дата и время">
            <Input type="date" placeholder="Выберите дату" />
            <Input type="time" placeholder="Выберите время" />
          </FormLayoutGroup>
          <Select
            top="Категория"
            placeholder="Выберите категорию контента"
            onChange={handleSelectOrInputChange(setCategory)}
          >
            {
              categoriesData.map(c =>
                <option
                  key={c.id}
                  value={c.id}
                >
                  {c.name}
                </option>
              )
            }
          </Select>
        </FormLayout>
      </ModalPage>
    </ModalRoot>
  )
}