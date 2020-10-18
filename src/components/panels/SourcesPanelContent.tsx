import { Icon56AddCircleOutline } from '@vkontakte/icons'
import { Button, Group, Placeholder, PullToRefresh, Spinner } from '@vkontakte/vkui'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IState } from '../../interfaces'
import { fetchFilters } from '../../redux/actions'
import { ErrorNotice } from '../common/ErrorNotice'
import { FilterCard } from '../common/FilterCard'
import { FilterModal } from '../modals/FilterModal'

export const SourcesPanelContent: React.FC = () => {
  const dispatch = useDispatch()
  const [modal, setModal] = useState<string | null>(null)
  const { data, error, loading } = useSelector((state: IState) => state.filters)

  return (
    <>
      <FilterModal modal={modal} setModal={setModal} />
      {
        error
          ?
          <ErrorNotice />
          :
          loading
            ?
            <Spinner size="large" />
            :
            data.length
              ?
              <>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                  <Button size="l" onClick={setModal.bind(null, 'filters')}>
                    Добавить ленту
                  </Button>
                </div>
                <PullToRefresh isFetching={loading} onRefresh={dispatch.bind(null, fetchFilters())}>
                  <Group>
                    {data.map(f => <FilterCard {...f} />)}
                  </Group>
                </PullToRefresh>
              </>
              :
              <Placeholder
                icon={<Icon56AddCircleOutline />}
                header="Персонализированные ленты"
                action={
                  <Button size="l" onClick={setModal.bind(null, 'filters')}>
                    Добавить ленту
                  </Button>
                }>
                Настройте набор источников, из которых хотите получать новости
              </Placeholder>
      }
    </>
  )
}