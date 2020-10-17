import React from 'react'
import { Div, Panel, PanelHeader } from '@vkontakte/vkui'
import { PanelProps } from '@vkontakte/vkui/dist/components/Panel/Panel'
import { Tabbar } from '../navigation/Tabbar'

export const PanelLayout: React.FC<PanelProps> = props =>
  <Panel {...props}>
    <PanelHeader>
      <Tabbar />
    </PanelHeader>
    <Div>
      {props.children}
    </Div>
  </Panel>