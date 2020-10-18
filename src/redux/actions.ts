import { Dispatch } from "redux"
import { ETheme } from "../enums"
import { IAction, INews, INewsFilter } from "../interfaces"
import { ADD_TO_FAVORITES, CREATE_FILTER, FETCH_CATEGORIES, FETCH_CITIES, FETCH_FILTERS, FETCH_NEWS, FETCH_REGIONS, REMOVE_FROM_FAVORITES, SET_CATEGORIES_LOADING, SET_CATEGORIES_LOADING_ERROR, SET_CITIES_LOADING, SET_CITIES_LOADING_ERROR, SET_FILTERS_LOADING, SET_FILTERS_LOADING_ERROR, SET_NEWS_LOADING, SET_NEWS_LOADING_ERROR, SET_REGIONS_LOADING, SET_REGIONS_LOADING_ERROR, SET_THEME } from "./types"

const apiURI = 'http://195.2.85.245'

export const fetchCategories = () => async (dispatch: Dispatch<IAction>) => {
  try {
    dispatch({ type: SET_CATEGORIES_LOADING, payload: true })
    dispatch({ type: SET_CATEGORIES_LOADING_ERROR, payload: null })

    const response = await fetch(`${apiURI}/categories`)
    const json = await response.json()

    dispatch({ type: FETCH_CATEGORIES, payload: json })
  } catch (e) {
    dispatch({ type: SET_CATEGORIES_LOADING_ERROR, payload: e.message })
  } finally {
    dispatch({ type: SET_CATEGORIES_LOADING, payload: false })
  }
}

export const fetchRegions = () => async (dispatch: Dispatch<IAction>) => {
  try {
    dispatch({ type: SET_REGIONS_LOADING, payload: true })
    dispatch({ type: SET_REGIONS_LOADING_ERROR, payload: null })

    const response = await fetch(`${apiURI}/region`)
    const json = await response.json()

    dispatch({ type: FETCH_REGIONS, payload: json })
  } catch (e) {
    dispatch({ type: SET_REGIONS_LOADING_ERROR, payload: e.message })
  } finally {
    dispatch({ type: SET_REGIONS_LOADING, payload: false })
  }
}

export const fetchCities = () => async (dispatch: Dispatch<IAction>) => {
  try {
    dispatch({ type: SET_CITIES_LOADING, payload: true })
    dispatch({ type: SET_CITIES_LOADING_ERROR, payload: null })

    const response = await fetch(`${apiURI}/city`)
    const json = await response.json()

    dispatch({ type: FETCH_CITIES, payload: json })
  } catch (e) {
    dispatch({ type: SET_CITIES_LOADING_ERROR, payload: e.message })
  } finally {
    dispatch({ type: SET_CITIES_LOADING, payload: false })
  }
}

export const fetchNews = () => async (dispatch: Dispatch<IAction>) => {
  try {
    dispatch({ type: SET_NEWS_LOADING, payload: true })
    dispatch({ type: SET_NEWS_LOADING_ERROR, payload: null })

    const response = await fetch(`${apiURI}/post`)
    const json = await response.json()

    dispatch({ type: FETCH_NEWS, payload: json })
  } catch (e) {
    dispatch({ type: SET_NEWS_LOADING_ERROR, payload: e.message })
  } finally {
    dispatch({ type: SET_NEWS_LOADING, payload: false })
  }
}

export const fetchFilters = () => async (dispatch: Dispatch<IAction>) => {
  try {
    dispatch({ type: SET_FILTERS_LOADING, payload: true })
    dispatch({ type: SET_FILTERS_LOADING_ERROR, payload: null })

    const response = await fetch(`${apiURI}/filters`)
    const json = await response.json()

    dispatch({ type: FETCH_FILTERS, payload: json })
  } catch (e) {
    dispatch({ type: SET_FILTERS_LOADING_ERROR, payload: e.message })
  } finally {
    dispatch({ type: SET_FILTERS_LOADING, payload: false })
  }
}

export const setCategoriesLoading = (payload: boolean) => ({ type: SET_CATEGORIES_LOADING, payload })
export const setCategoriesLoadingError = (payload: string) => ({ type: SET_CATEGORIES_LOADING, payload })

export const setRegionsLoading = (payload: boolean) => ({ type: SET_REGIONS_LOADING, payload })
export const setRegionsLoadingError = (payload: string) => ({ type: SET_REGIONS_LOADING_ERROR, payload })

export const setCitiesLoading = (payload: boolean) => ({ type: SET_CITIES_LOADING, payload })
export const setCitiesLoadingError = (payload: string) => ({ type: SET_CITIES_LOADING_ERROR, payload })

export const setNewsLoading = (payload: boolean) => ({ type: SET_NEWS_LOADING, payload })
export const setNewsLoadingError = (payload: string) => ({ type: SET_NEWS_LOADING_ERROR, payload })

export const setFiltersLoading = (payload: boolean) => ({ type: SET_FILTERS_LOADING, payload })
export const setFiltersLoadingError = (payload: string) => ({ type: SET_FILTERS_LOADING_ERROR, payload })
export const createFilter = (payload: INewsFilter) => ({ type: CREATE_FILTER, payload })

export const setTheme = (payload: ETheme) => ({ type: SET_THEME, payload })

export const addToFavorites = (payload: INews) => async (dispatch: Dispatch<IAction>) => {
  dispatch({ type: ADD_TO_FAVORITES, payload })
  localStorage.setItem('favorites', JSON.stringify(payload))
}
export const removeFromFavorites = (payload: string) => async (dispatch: Dispatch<IAction>) => {
  const json = localStorage.getItem('favorites') || '[]' 
  dispatch({ type: REMOVE_FROM_FAVORITES, payload })
  const data = JSON.parse(json)
  localStorage.setItem('favorites', JSON.stringify(data))
}