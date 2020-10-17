import React, { useEffect, useState } from 'react'
import { View } from '@vkontakte/vkui'
import { TabbarItemId } from './types'
import { FeedPanelContent } from './components/panels/FeedPanelContent'
import { PanelLayout } from './components/layouts/PanelLayout'
import { SourcesPanelContent } from './components/panels/SourcesPanelContent'
import bridge from '@vkontakte/vk-bridge'

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabbarItemId>('feed')

  let currentPanel: React.ReactNode = null

  switch (activeTab) {
    case 'feed':
      // currentPanel = <FeedPanelContent />
      break
    case 'sources':
      currentPanel = <SourcesPanelContent />
      break
  }

  useEffect(() => {
    bridge.send('VKWebAppInit')
  })

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