import { Reducer } from "react"
import { ETheme } from "../../enums"
import { IAction, IStatePartialTheme } from "../../interfaces"
import { SET_THEME } from "../types"

const initialState: IStatePartialTheme = {
  theme: ETheme.Light
}

export const themeReducer: Reducer<IStatePartialTheme, IAction> = (state: IStatePartialTheme = initialState, { type, payload }: IAction) => {
  switch (type) {
    case SET_THEME: return { ...state, theme: payload }

    default: return state
  }
}