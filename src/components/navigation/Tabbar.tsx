import React, { useContext } from 'react'
import { FixedLayout, Separator, Tabs, HorizontalScroll, TabsItem } from '@vkontakte/vkui'
import { TabbarItemId } from '../../types'
import { TabIdContext } from '../../context/TabIdContext'

interface ITabbarItem {
  id: TabbarItemId
  title: string
}

const tabbarItems: ITabbarItem[] = [
  { title: 'Лента', id: 'feed' },
  { title: 'Источники', id: 'sources' },
  { title: 'Избранное', id: 'favorites' },
  { title: 'Профиль', id: 'profile' }
]

export const Tabbar: React.FC = () => {
  const { activePanel, setActivePanel } = useContext(TabIdContext)

  return (
    <FixedLayout vertical="top">
      <Separator wide />
      <Tabs>
        <HorizontalScroll>
          {
            tabbarItems.map(t =>
              <TabsItem
                selected={activePanel === t.id}
                onClick={setActivePanel.bind(null, t.id)}
                key={t.id}
              >
                {t.title}
              </TabsItem>
            )
          }
        </HorizontalScroll>
      </Tabs>
    </FixedLayout>
  )
}