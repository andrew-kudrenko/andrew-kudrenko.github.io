import { combineReducers } from "redux"
import { categoriesReducer } from "./categories-reducer"
import { citiesReducer } from "./cities-reducer"
import { favoritesReducer } from "./favorites-reducer"
import { filtersReducer } from "./filters-reducer"
import { newsReducer } from "./news-reducer"
import { regionsReducer } from "./regions-reducer"
import { themeReducer } from "./theme-reducer"

export const rootReducer = combineReducers({
  categories: categoriesReducer,
  regions: regionsReducer,
  cities: citiesReducer,
  news: newsReducer,
  filters: filtersReducer,
  theme: themeReducer,
  favorites: favoritesReducer
})