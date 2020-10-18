import React from 'react'
import { Div, Panel, PanelHeader } from '@vkontakte/vkui'
import { PanelProps } from '@vkontakte/vkui/dist/components/Panel/Panel'
import { Tabbar } from '../navigation/Tabbar'
import { TabbarItemId } from '../../types'

interface IPanelLayoutProps extends PanelProps {
  activeTab: TabbarItemId
  setActiveTab: (t: TabbarItemId) => void
}

export const PanelLayout: React.FC<IPanelLayoutProps> = props =>
  <Panel {...props}>
    <PanelHeader>
      <Tabbar {...props} />
    </PanelHeader>
    <Div style={{
      margin: '0 auto',
      maxWidth: '1200px',
    }}>
      {props.children}
    </Div>
  </Panel>