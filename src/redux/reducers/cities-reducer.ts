import { Reducer } from "react"
import { IAction, ICategory, IStatePartial } from "../../interfaces"
import { FETCH_CITIES, SET_CITIES_LOADING, SET_CITIES_LOADING_ERROR } from "../types"

const initialState: IStatePartial<ICategory> = {
  data: [],
  error: null,
  loading: false
}

export const citiesReducer: Reducer<IStatePartial<ICategory>, IAction> = (state: IStatePartial<ICategory> = initialState, { type, payload }: IAction) => {
  switch (type) {
    case FETCH_CITIES: return { ...state, data: payload }
    case SET_CITIES_LOADING: return { ...state, loading: payload }
    case SET_CITIES_LOADING_ERROR: return { ...state, error: payload }

    default: return state
  }
}