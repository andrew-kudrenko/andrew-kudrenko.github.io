import { Reducer } from "react"
import { IAction, ICategory, IStatePartial } from "../../interfaces"
import { FETCH_NEWS, SET_NEWS_LOADING, SET_NEWS_LOADING_ERROR } from "../types"

const initialState: IStatePartial<ICategory> = {
  data: [],
  error: null,
  loading: false
}

export const newsReducer: Reducer<IStatePartial<ICategory>, IAction> = (state: IStatePartial<ICategory> = initialState, { type, payload }: IAction) => {
  switch (type) {
    case FETCH_NEWS: return { ...state, data: payload }
    case SET_NEWS_LOADING: return { ...state, loading: payload }
    case SET_NEWS_LOADING_ERROR: return { ...state, error: payload }

    default: return state
  }
}