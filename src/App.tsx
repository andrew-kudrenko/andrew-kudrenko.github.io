import React, { useState } from 'react'
import { View } from '@vkontakte/vkui'
import { TabbarItemId } from './types'
import { TabIdContext } from './context/TabIdContext'
import { FeedPanelContent } from './components/panels/FeedPanelContent'
import { PanelLayout } from './components/layouts/PanelLayout'
import { SourcesPanelContent } from './components/panels/SourcesPanelContent'

export const App: React.FC = () => {
  const [activePanel, setActivePanel] = useState<TabbarItemId>('feed')

  let currentPanel: React.ReactNode = null

  switch (activePanel) {
    case 'feed':
      currentPanel = <FeedPanelContent />
      break
    case 'sources':
      currentPanel = <SourcesPanelContent />
      break
  }

  return (
    <TabIdContext.Provider value={{ activePanel, setActivePanel }}>      
      <View activePanel="main">
        <PanelLayout id="main">
          {currentPanel}
        </PanelLayout>
      </View>
    </TabIdContext.Provider>
  )
}