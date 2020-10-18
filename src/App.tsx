import React, { useEffect, useState } from 'react'
import { View } from '@vkontakte/vkui'
import { TabbarItemId } from './types'
import { FeedPanelContent } from './components/panels/FeedPanelContent'
import { PanelLayout } from './components/layouts/PanelLayout'
import { SourcesPanelContent } from './components/panels/SourcesPanelContent'
import bridge from '@vkontakte/vk-bridge'
import { useDispatch } from 'react-redux'
import { fetchCategories, fetchRegions } from './redux/actions'
import { FavoritesPanelContent } from './components/panels/FavoritesPanelContent'

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabbarItemId>('feed')
  const dispatch = useDispatch()

  let currentPanel: React.ReactNode = null

  switch (activeTab) {
    case 'feed':
      currentPanel = <FeedPanelContent />
      break
    case 'sources':
      currentPanel = <SourcesPanelContent />
      break
    case 'favorites':
      currentPanel = <FavoritesPanelContent />
  }

  useEffect(() => {
    bridge
      .send('VKWebAppInit')
      .then(() => bridge.send('VKWebAppGetPersonalCard'))
      .then(data => console.log(data))
      .catch(console.log)
  })

  useEffect(() => {
    // dispatch(fetchFilters())
    dispatch(fetchCategories())
    // dispatch(fetchCities())
    dispatch(fetchRegions())
    // dispatch(fetchNews())
  }, [])

  return (
    <View activePanel="main">
      <PanelLayout 
        id="main" 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
      >
        {currentPanel}
      </PanelLayout>
    </View>
  )
}