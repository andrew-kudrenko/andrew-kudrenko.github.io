import { Reducer } from "react"
import { IAction, IStatePartialFavorites } from "../../interfaces"
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../types"

const initialState: IStatePartialFavorites = {
  favorites: []
}

export const favoritesReducer: Reducer<IStatePartialFavorites, IAction> = (state: IStatePartialFavorites = initialState, { type, payload }: IAction) => {
  switch (type) {
    case ADD_TO_FAVORITES: return { ...state, favorites: [...state.favorites, payload] }
    case REMOVE_FROM_FAVORITES: return { ...state, favorites: [...state.favorites.filter(f => f.id !== payload.id)] }

    default: return state
  }
}