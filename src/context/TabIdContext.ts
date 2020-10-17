import React from "react"
import { TabbarItemId } from "../types"

interface ITabIdContext {
  activePanel: TabbarItemId
  setActivePanel: (() => void) | ((t: TabbarItemId) => void)
}

export const TabIdContext = React.createContext<ITabIdContext>({
  activePanel: 'feed',
  setActivePanel: () => {}
})