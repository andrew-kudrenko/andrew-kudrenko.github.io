import { Reducer } from "react"
import { IAction, IRegion, IStatePartial } from "../../interfaces"
import { FETCH_REGIONS, SET_REGIONS_LOADING, SET_REGIONS_LOADING_ERROR } from "../types"

const initialState: IStatePartial<IRegion> = {
  data: [],
  error: null,
  loading: false
}

export const regionsReducer: Reducer<IStatePartial<IRegion>, IAction> = (state: IStatePartial<IRegion> = initialState, { type, payload }: IAction) => {
  switch (type) {
    case FETCH_REGIONS: return { ...state, data: payload }
    case SET_REGIONS_LOADING: return { ...state, loading: payload }
    case SET_REGIONS_LOADING_ERROR: return { ...state, error: payload }

    default: return state
  }
}