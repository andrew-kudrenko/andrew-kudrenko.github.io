import { Reducer } from "react"
import { IAction, IRegion, IStatePartial } from "../../interfaces"
import { FETCH_FILTERS, SET_FILTERS_LOADING, SET_FILTERS_LOADING_ERROR } from "../types"

const initialState: IStatePartial<IRegion> = {
  data: [],
  error: null,
  loading: false
}

export const filtersReducer: Reducer<IStatePartial<IRegion>, IAction> = (state: IStatePartial<IRegion> = initialState, { type, payload }: IAction) => {
  switch (type) {
    case FETCH_FILTERS: return { ...state, data: payload }
    case SET_FILTERS_LOADING: return { ...state, loading: payload }
    case SET_FILTERS_LOADING_ERROR: return { ...state, error: payload }

    default: return state
  }
}