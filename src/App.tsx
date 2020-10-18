import React, { useEffect, useState } from 'react'
import { View } from '@vkontakte/vkui'
import { TabbarItemId } from './types'
import { FeedPanelContent } from './components/panels/FeedPanelContent'
import { PanelLayout } from './components/layouts/PanelLayout'
import { SourcesPanelContent } from './components/panels/SourcesPanelContent'
import bridge from '@vkontakte/vk-bridge'
import { useDispatch } from 'react-redux'
import { fetchCategories, fetchNews, fetchRegions } from './redux/actions'
import { FavoritesPanelContent } from './components/panels/FavoritesPanelContent'
import { ProfilePanelContent } from './components/panels/ProfilePanelContent'
import { useTheme } from './hooks/useTheme'

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabbarItemId>('feed')
  const { setTheme } = useTheme()

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
      break
    case 'profile':
      currentPanel = <ProfilePanelContent />
      break
  }

  useEffect(() => {
    bridge
      .send('VKWebAppInit')
      .then(() => bridge.send('VKWebAppGetPersonalCard'))
      .catch(console.log)
  })

  useEffect(dispatch.bind(null, fetchCategories()))

  // useEffect(dispatch.bind(null, fetchCities()))

  useEffect(dispatch.bind(null, fetchRegions()))

  useEffect(dispatch.bind(null, fetchNews()))

  useEffect(setTheme)

  return (
    <View activePanel="main" >
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