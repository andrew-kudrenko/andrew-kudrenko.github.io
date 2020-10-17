import { combineReducers } from "redux"
import { categoriesReducer } from "./categories-reducer"
import { citiesReducer } from "./cities-reducer"
import { filtersReducer } from "./filters-reducer"
import { newsReducer } from "./news-reducer"
import { regionsReducer } from "./regions-reducer"

export const rootReducer = combineReducers({
  categories: categoriesReducer,
  regions: regionsReducer,
  cities: citiesReducer,
  news: newsReducer,
  filters: filtersReducer
})