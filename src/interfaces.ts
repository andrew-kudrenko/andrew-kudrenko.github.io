import { AnyAction } from "redux";
import { ETheme } from "./enums";

export interface ICategory {
  id: string
  name: string
}

export interface IRegion {
  id: string
  title: string
}

export interface ICity {
  id: string
  title: string
}

export interface INewsFilter {
  title: string
  date?: Date
  region?: IRegion
  city?: ICity
  category?: ICategory
  source?: string
}

export interface INews {
  id: string
  text: string
  url: string
  added: string
  photo?: string
  video?: string
  is_new: boolean
}

export interface IStatePartial<T> {
  data: T[]
  loading: boolean
  error: string | null
}

export interface IState {
  categories: IStatePartial<ICategory>
  regions: IStatePartial<IRegion>
  cities: IStatePartial<ICity>
  news: IStatePartial<INews>
  filters: IStatePartial<INewsFilter>
  theme: IStatePartialTheme
}

export interface IStatePartialTheme {
  theme: ETheme
}

export interface IAction extends AnyAction {
  type: string
  payload?: any 
}