import React from 'react'
import { FixedLayout, Separator, Tabs, HorizontalScroll, TabsItem } from '@vkontakte/vkui'
import { TabbarItemId } from '../../types'

interface ITabbarItem {
  id: TabbarItemId
  title: string
}

interface ITabbarProps {
  activeTab: TabbarItemId
  setActiveTab: (t: TabbarItemId) => void
} 

const tabbarItems: ITabbarItem[] = [
  { title: 'Лента', id: 'feed' },
  { title: 'Источники', id: 'sources' },
  { title: 'Избранное', id: 'favorites' },
  { title: 'Профиль', id: 'profile' }
]

export const Tabbar: React.FC<ITabbarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <FixedLayout vertical="top">
      <Separator wide />
      <Tabs>
        <HorizontalScroll>
          {
            tabbarItems.map(t =>
              <TabsItem
                selected={activeTab === t.id}
                onClick={setActiveTab.bind(null, t.id)}
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