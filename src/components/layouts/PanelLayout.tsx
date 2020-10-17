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
    <Div>
      {props.children}
    </Div>
  </Panel>