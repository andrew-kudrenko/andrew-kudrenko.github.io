import { Button } from '@vkontakte/vkui'
import React, { useState } from 'react'
import { FilterModal } from '../modals/FilterModal'

export const SourcesPanelContent: React.FC = () => {
  const [modal, setModal] = useState<string | null>(null)

  return (
    <>
      <FilterModal modal={modal} setModal={setModal} />
      <Button 
        size="xl"
        onClick={setModal.bind(null, 'filters')}
      >Добавить ленту</Button>
      
    </>
  )
}