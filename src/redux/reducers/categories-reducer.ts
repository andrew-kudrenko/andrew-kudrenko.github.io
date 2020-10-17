import { Reducer } from "react"
import { IAction, ICategory, IStatePartial } from "../../interfaces"
import { FETCH_CATEGORIES, SET_CATEGORIES_LOADING, SET_CATEGORIES_LOADING_ERROR } from "../types"

const initialState: IStatePartial<ICategory> = {
  data: [],
  error: null,
  loading: false
}

export const categoriesReducer: Reducer<IStatePartial<ICategory>, IAction> = (state: IStatePartial<ICategory> = initialState, { type, payload }: IAction) => {
  switch (type) {
    case FETCH_CATEGORIES: return { ...state, data: payload }
    case SET_CATEGORIES_LOADING: return { ...state, loading: payload }
    case SET_CATEGORIES_LOADING_ERROR: return { ...state, error: payload }

    default: return state
  }
}